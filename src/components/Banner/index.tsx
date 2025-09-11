import { Imagem, Titulo } from "./styles";
import Tag from "../Tag";
import { Shop } from "../../pages/Home";

type Props = {
  shop: Shop;
};

const Banner = ({ shop }: Props) => {
  return (
    <Imagem style={{ backgroundImage: `url(${shop.capa})` }}>
      <div className="container">
        <Tag size="big">{shop.tipo}</Tag>
        <Titulo>{shop.titulo}</Titulo>
      </div>
    </Imagem>
  );
};

export default Banner;
