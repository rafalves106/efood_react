import Food from "../../models/Food";
import Foods from "../Foods";
import { Container, List } from "./style";

type Props = {
  foods: Food[];
};

const FoodList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Foods
            image={food.image}
            title={food.title}
            description={food.description}
            button={food.button}
          />
        ))}
      </List>
    </div>
  </Container>
);

export default FoodList;
