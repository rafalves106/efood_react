import Button from "../Button";
import Rating from "../Rating";
import Tag from "../Tag";
import {
  Card,
  Content,
  Descricao,
  Infos,
  TitleSection,
  Titulo,
} from "./styles";

type Props = {
  image: string;
  infos: string[];
  title: string;
  description: string;
  button: string;
  rating: string;
  star: string;
  buttonLink: string;
};

const Shops = ({
  image,
  infos,
  title,
  description,
  button,
  rating,
  star,
  buttonLink,
}: Props) => (
  <Card>
    <img src={image} alt={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Content>
      <TitleSection>
        <Titulo>{title}</Titulo>
        <Rating title={rating} image={star}></Rating>
      </TitleSection>
      <Descricao>{description}</Descricao>
      <Button type="link" to={buttonLink} title="Saiba Mais">
        {button}
      </Button>
    </Content>
  </Card>
);

export default Shops;
