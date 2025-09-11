import { Shop } from "../../pages/Home";
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
          <Shops key={shop.id} shop={shop} />
        ))}
      </List>
    </div>
  </Container>
);

export default ShopsList;
