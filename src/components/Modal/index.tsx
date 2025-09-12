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
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";

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

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(food));
    dispatch(open());
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
          <Button
            onClick={addToCart}
            type="button"
            title="Adicionar ao carrinho"
            variant="default"
          >
            {`Adicionar ao carrinho - ${formatPrice(food.preco)}`}
          </Button>
        </ProdutoTexts>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
