import Shop from "../../models/Shop";
import Shops from "../Shops";
import { Container, List } from "./style";

type Props = {
  shops: Shop[];
};

const ShopsList = ({ shops }: Props) => (
  <Container>
    <div className="container">
      <List>
        {shops.map((shop) => (
          <Shops
            image={shop.image}
            rating={shop.rating}
            star={shop.star}
            title={shop.title}
            description={shop.description}
            button={shop.button}
            infos={shop.infos}
            buttonLink={shop.buttonLink}
          />
        ))}
      </List>
    </div>
  </Container>
);

export default ShopsList;
