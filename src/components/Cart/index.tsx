import Button from "../Button";
import { memo } from "react";
import { CartItem, CartList, Prices, PricesContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

type Props = {
  onCheckout: () => void;
};

const Cart = ({ onCheckout }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <>
      <CartList>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <span>{formatPrice(item.preco)}</span>
            </div>
            <button onClick={() => removeItem(item.id)} type="button" />
          </CartItem>
        ))}
      </CartList>
      <PricesContainer>
        <Prices>Valor total</Prices>
        <Prices>{formatPrice(getTotalPrice())}</Prices>
      </PricesContainer>

      <Button
        onClick={onCheckout}
        title="Clique aqui para continuar com a entrega"
        type="button"
      >
        Continuar com a entrega
      </Button>
    </>
  );
};

export default memo(Cart);
