import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100wh;
  height: calc(100vh - 86px);
  /* margin-top: 1em; */
  background-image: linear-gradient(black, black),
    url("https://images.unsplash.com/photo-1546948630-84f64bda3ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  background-blend-mode: saturation;
  background-repeat: no-repeat;

  .main-page {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    text-align: center;
    font-size: 2rem;
    color: white;
    /* background-color: black; */
    padding: 0.1em 0.7em;
    border-radius: 50px;
  }

  .main-buttons {
    display: flex;
    align-self: center;
    margin-top: 4em;
  }
  a {
    padding: 0.2rem 0.3rem;
  }
`;
