import Button from "../Button";
import Rating from "../Rating";
import Tag from "../Tag";
import star from "../../assets/images/estrela.png";
import {
  Card,
  Content,
  Cover,
  Descricao,
  Infos,
  TitleSection,
  Titulo,
} from "./styles";
import { Shop } from "../../pages/Home";

type Props = {
  shop: Shop;
};

const Shops = ({ shop }: Props) => {
  const infos = [];

  if (shop.destacado) {
    infos.push("Destaque da semana");
  }

  infos.push(shop.tipo);

  const buttonLink = `/restaurante/${shop.id}`;

  return (
    <Card>
      <Cover src={shop.capa} alt={shop.titulo} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Content>
        <TitleSection>
          <Titulo>{shop.titulo}</Titulo>
          <Rating title={shop.avaliacao.toString()} image={star}></Rating>
        </TitleSection>
        <Descricao>{shop.descricao}</Descricao>
        <Button
          type="link"
          to={buttonLink}
          title="Saiba Mais"
          variant="inverted"
        >
          Saiba Mais
        </Button>
      </Content>
    </Card>
  );
};

export default Shops;
