import styled from "styled-components";
import Button from "@mui/material/Button";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .item_card {
    display: flex;
    flex-direction: column;
    padding: 1em;
  }
  .item_content {
    align-self: center;
    margin-top: 1em;
    color: #726dfe;
  }
  .item_image {
    width: 350px;
    padding: 0 1rem;
    border-radius: 2rem;
    // background-color: black;
  }
  .red {
    /* background-color: red; */
    opacity: 0.7;
  }
  .sold {
    font-weight: 900;
    font-size: 16px;
  }
  .out {
    color: red;
  }
`;

export const Box = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;

  .top {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
`;

export const Wrapper = styled(Container)`
  width: 90%;
  margin: 2em auto;
  flex-direction: column;

  .item_card {
    flex-direction: row;
  }
  .item_content {
    align-self: start;
    // margin-left: 2em;
  }
  .edit-item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 3em;
  }
  .item_image {
    width: 300px;
  }

  .buttons {
    display: flex;
    gap: 1em;
  }
`;

export const myButton = styled(Button)`
  color: yellow;
`;
