import Button from "../Button";
import { Card, Content, Descricao, Image, Titulo } from "./styles";
import { Food } from "../../pages/Home";

type Props = {
  food: Food;
  onFoodClick: (food: Food) => void;
};

const Foods = ({ food, onFoodClick }: Props) => (
  <Card onClick={() => onFoodClick(food)}>
    <Content>
      <Image src={food.foto} alt={food.nome} />
      <Titulo>{food.nome} </Titulo>
      <Descricao>{food.descricao}</Descricao>
    </Content>
    <Button type="link" to="/carrinho" title="Adicionar ao carrinho">
      Adicionar ao carrinho
    </Button>
  </Card>
);

export default Foods;
