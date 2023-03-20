import styled from "styled-components";

export const Container = styled.div`
  .message-list {
    width: 30vw;
    height: 50vh;
  }

  .message-container {
    width: 30vw;
    height: 50vh;
    background-color: #fff;
    padding: 20px;
    overflow-y: scroll;
  }

  .message {
    width: 80%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #ddd;
    outline: none;
    padding: 15px;
  }

  .user,
  .date {
    font-size: 0.625rem;
    color: #888888;
  }

  .user {
    min-width: 120px;
  }

  .message {
    flex-grow: 1;
  }
`;
