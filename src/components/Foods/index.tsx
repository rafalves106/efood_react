import Button from "../Button";
import { Card, Descricao, Titulo } from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
  button: string;
};

const Foods = ({ image, title, description, button }: Props) => (
  <Card>
    <img src={image} alt={image} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type="button" to="/carrinho" title="Adicionar ao carrinho">
      {button}
    </Button>
  </Card>
);

export default Foods;
