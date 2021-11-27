import Button from "@mui/material/Button"
import { Link } from "react-router-dom";

const Thanks = () => {
  
  return ( 
    <div>
      <h4>Thank you<br />For Your Purchase! </h4>
      <div>
        <Link to="/store">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}

export default Thanks;