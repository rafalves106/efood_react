import { Content, HeaderBar } from "./styles";
import logo from "../../assets/images/logo.svg";
import { Logo } from "../../styles";

const FoodsHeader = () => (
  <HeaderBar>
    <Content className="container">
      <a href="/">Restaurantes</a>
      <Logo src={logo} alt="Efood" />
      <h4>0 produto(s) no carrinho</h4>
    </Content>
  </HeaderBar>
);

export default FoodsHeader;
