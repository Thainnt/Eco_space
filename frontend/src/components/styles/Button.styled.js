import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

export const MyArrow = styled(ArrowBackIcon)({
  // margin-left: '1px'
  // color: "yellow",
  margin: " 0 0 0 1em",
  cursor: "pointer",
  fontSize: "20px",
  width: "30px",
});
