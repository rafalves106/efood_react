import { Content, HeaderBar } from "./styles";
import logo from "../../assets/images/logo.svg";
import { Logo } from "../../styles";

import { open } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

const FoodsHeader = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderBar>
      <Content className="container">
        <a href="/">Restaurantes</a>
        <Logo src={logo} alt="Efood" />
        <h4 onClick={openCart}>{items.length} produto(s) no carrinho</h4>
      </Content>
    </HeaderBar>
  );
};

export default FoodsHeader;
