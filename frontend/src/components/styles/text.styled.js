import styled from "styled-components";

export const Container = styled.div`
  .app-header {
    padding: 10px;
    background-color: #282c34;
    color: white;
  }

  .app-header > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
`;
