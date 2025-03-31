import { HeaderBar, HeaderTitle } from "./styles";
import logo from "../../assets/images/logo.svg";
import { Logo } from "../../styles";

const ShopsHeader = () => (
  <HeaderBar>
    <Logo src={logo} alt="Efood" />
    <HeaderTitle>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </HeaderTitle>
  </HeaderBar>
);

export default ShopsHeader;
