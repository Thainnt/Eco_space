import styled from "styled-components";
import { Container } from "./Container.styled";

export const ContainerDetails = styled(Container)`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  color: #000;
  gap: 3rem;

  .item_image {
    width: 50%;
  }

  .box {
    display: flex;
  }
`;
