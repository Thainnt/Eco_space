import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100wh;
  height: 100vh;
  background: linear-gradient(to right, #232526, #414345);
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    width: 600px;
    height: 400px;
    background-color: #f3f1f5;
    padding: 4em;
    display: flex;
    flex-direction: column;

    h4 {
      margin-bottom: 2em;
    }
  }
`;
