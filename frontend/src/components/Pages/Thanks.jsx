import { Link } from "react-router-dom";
import { Wrapper } from "../styles/Thanks.styled";

const Thanks = () => {
  
  return ( 
    <Wrapper>
      <div className='box'>
        <h4>Thank you<br />For Your Purchase! </h4>
        <div>
          <Link to="/store">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Thanks;