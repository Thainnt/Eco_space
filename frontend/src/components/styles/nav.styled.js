import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  // position: fixed;
  // top: 0;
  // margin-bottom: 30em;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
`;
