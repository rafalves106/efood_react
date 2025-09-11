import {
  ModalContent,
  Overlay,
  CloseButton,
  ProdutoTexts,
  ProdutoTitle,
  ProdutoDescription,
  ImageContainer,
} from "./styles";
import closeIcon from "../../assets/images/close.png";
import Button from "../Button";
import { Food } from "../../pages/Home";

interface ModalProps {
  food: Food;
  onClose: () => void;
}

const Modal = ({ food, onClose }: ModalProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <Overlay>
      <ModalContent>
        <CloseButton src={closeIcon} alt="Fechar" onClick={onClose} />
        <ImageContainer src={food.foto} alt={food.nome} />
        <ProdutoTexts>
          <ProdutoTitle>{food.nome}</ProdutoTitle>
          <ProdutoDescription>{food.descricao}</ProdutoDescription>
          <ProdutoDescription>Serve: de {food.porcao}</ProdutoDescription>
          <Button type="button" title="Adicionar ao carrinho">
            {`Adicionar ao carrinho - ${formatPrice(food.preco)}`}
          </Button>
        </ProdutoTexts>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
