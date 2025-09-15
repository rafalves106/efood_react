import styled from "styled-components";
import { cores } from "../../styles";

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    color: ${cores.rosa};
    line-height: 22px;
    margin-bottom: 24px;
  }
`;
