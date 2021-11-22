import styled from "styled-components";

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
  }
  .item_image {
    width: 350px;
    padding: 0 1rem;
    border-radius: 2rem;
    // background-color: black;
  }
`;
