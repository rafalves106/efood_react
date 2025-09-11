import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  gap: 24px;
  align-items: center;
  height: 344px;
  width: 1024px;
  background-color: #e66767;
`;

export const ImageContainer = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const ProdutoTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
  height: 100%;
`;

export const ProdutoTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;

export const ProdutoDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #ffffff;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  width: 16px;
  height: 16px;
`;
