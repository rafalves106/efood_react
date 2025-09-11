import { Food } from "../../pages/Home";
import Foods from "../Foods";
import { Container, List } from "./style";

type Props = {
  foods: Food[];
  onFoodClick: (food: Food) => void;
};

const FoodList = ({ foods, onFoodClick }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Foods key={food.id} food={food} onFoodClick={onFoodClick} />
        ))}
      </List>
    </div>
  </Container>
);

export default FoodList;
