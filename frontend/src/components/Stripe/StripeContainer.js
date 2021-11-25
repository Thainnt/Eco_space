import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const StripeContainer = () => {
  const PUBLIC_KEY = "pk_test_51Ju4a4HOc9aaBF9Y5rRQp1TiMaebm0pJWbo4CmMtDmP2flMAskk4HmdvwAomxUt8nSyypk77eUGKcPcup0LcTQne00p8sYBKDY"

  const stripeTestPromise = loadStripe(PUBLIC_KEY);
  return ( 
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
   );
}
 
export default StripeContainer;