import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100wh;
  height: calc(100vh - 150px);
  /* margin-top: 1em; */
  /* background-image: url("https://www.homerenoguru.sg/wp-content/uploads/main-article-021.jpg");
  background-repeat: no-repeat;
  background-size: contain; */

  .motto {
    align-self: center;
    background: linear-gradient(to right, #000000, #434343);
    width: 100vw;
    position: relative;
    // margin-right: -35vw;
    height: 80px;
    margin-top: 100px
    left: 50%;
    // right: 0;
    padding: 10em 10em;

    p {
      text-align: center;
      font-size: 2rem;
      color: goldenrod;
    }
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
