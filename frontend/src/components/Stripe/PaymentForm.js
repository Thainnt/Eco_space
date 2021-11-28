import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { PayForm } from "../styles/PayForm.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontSize: "16px",
      fontSmoothing: "antialliased",
      ":-webkit-autfill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const { setItem } = useContext(dataContext);

  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { navigate } = useContext(dataContext);
  const [isPending, setIspending] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8080/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("successful payment");
          setIspending(false);
          setSuccess(true);
          setItem([]);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  // const handleClick = () => {
  //   if(isPending) {
  //     return <div>Processing Payment</div>
  //   }
  // }

  return (
    <PayForm>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        navigate("/Thanks")
      )}
    </PayForm>
  );
};

export default PaymentForm;
