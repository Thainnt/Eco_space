import styled from "styled-components";
import { Container } from "./Container.styled";

export const ContainerDetails = styled(Container)`
  display: flex;
  width: 100vw;
  height: calc(100vh - 116px);
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  color: #000;
  gap: 3rem;

  .box {
    display: flex;
    gap: 2em;
  }
  .item_image {
    width: 30%;
  }

  .info {
    display: flex;
    width: 100%;

    .content {
      width: 50%;
      margin-left: 3em;
    }
  }
`;
