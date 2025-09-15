import styled from "styled-components";
import { cores } from "../../styles";

export const CheckoutContainer = styled.div`
  margin-bottom: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  flex: auto;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.rosa};
  }

  input {
    background-color: ${cores.rosa};
    font-size: 14px;
    font-weight: bold;
    color: ${cores.text};
    height: 32px;
    border: 1px solid ${cores.rosa};
    max-width: 100%;
    width: 100%;
    padding: 8px;
  }

  span {
    font-size: 12px;
    color: ${cores.bege};
  }
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
`;
