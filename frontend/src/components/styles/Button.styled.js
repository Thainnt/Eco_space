import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const MyButton = styled(Button)({
  // background: "#938ffe",
  border: 0,
  borderRadius: 3,
  color: "black",
  backgroundColor: "white",
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
