import Button from "../Button";
import { Card, Content, Descricao, Image, Titulo } from "./styles";
import { Food } from "../../pages/Home";
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";

type Props = {
  food: Food;
  onFoodClick: (food: Food) => void;
};

const Foods = ({ food, onFoodClick }: Props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(food));
    dispatch(open());
  };

  return (
    <Card>
      <Content onClick={() => onFoodClick(food)}>
        <Image src={food.foto} alt={food.nome} />
        <Titulo>{food.nome} </Titulo>
        <Descricao>{food.descricao}</Descricao>
      </Content>
      <Button onClick={addToCart} type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </Card>
  );
};

export default Foods;
