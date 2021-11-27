import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 3em;
  /* background-color: lavenderblush; */
`;

export const Wrapper = styled.div`
  padding: 30px 5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    padding: 9px 25px;
    background-color: #1976d1;
    border: none;
    background-image: linear-gradient(
      to right,
      #141e30 0%,
      #243b55 51%,
      #141e30 100%
    );

    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: white;

    &:hover {
      background-color: burlywood;
    }
  }
`;

export const Logo = styled.h1`
  font-family: ${({ theme }) => `${theme.fonts.logo}`};
  font-weight: bold;
  color: black;
  margin-right: auto;
`;

export const MenuItem = styled.div`
  display: inline-block;
  padding: 0px 20px;
  color: black;
  transition: all 0.3s ease 0s;

  &:hover {
    color: burlywood;
  }
`;
