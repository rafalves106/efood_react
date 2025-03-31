import logo from "../../assets/images/logo.svg";
import { Logo } from "../../styles";
import { FooterBar, Social } from "./styles";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";

const Footer = () => (
  <FooterBar>
    <Logo src={logo} alt="Efood" />
    <Social>
      <li>
        <img src={instagram} alt="Instagram" />
      </li>
      <li>
        <img src={facebook} alt="Facebook" />
      </li>
      <li>
        <img src={twitter} alt="Twitter" />
      </li>
    </Social>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br />
      dos produtos é toda do estabelecimento contratado.
    </p>
  </FooterBar>
);

export default Footer;
