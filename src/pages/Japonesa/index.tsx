import Food from "../../models/Food";
import Banner from "../../components/Banner";

import ramen from "../../assets/images/ramen.png";
import FoodList from "../../components/FoodList";
import FoodsHeader from "../../components/FoodsHeader";

const foods: Food[] = [
  {
    id: 1,
    button: "Adicionar ao carrinho",
    description:
      "Um autêntico Ramen Japonês: caldo rico e aromático, macarrão artesanal, fatias suculentas de chashu, ovo marinado e cebolinha fresca.",
    image: ramen,
    title: "Ramen Japonês",
  },
  {
    id: 2,
    button: "Adicionar ao carrinho",
    description:
      "Um autêntico Ramen Japonês: caldo rico e aromático, macarrão artesanal, fatias suculentas de chashu, ovo marinado e cebolinha fresca.",
    image: ramen,
    title: "Ramen Japonês",
  },
  {
    id: 3,
    button: "Adicionar ao carrinho",
    description:
      "Um autêntico Ramen Japonês: caldo rico e aromático, macarrão artesanal, fatias suculentas de chashu, ovo marinado e cebolinha fresca.",
    image: ramen,
    title: "Ramen Japonês",
  },
  {
    id: 4,
    button: "Adicionar ao carrinho",
    description:
      "Um autêntico Ramen Japonês: caldo rico e aromático, macarrão artesanal, fatias suculentas de chashu, ovo marinado e cebolinha fresca.",
    image: ramen,
    title: "Ramen Japonês",
  },
  {
    id: 5,
    button: "Adicionar ao carrinho",
    description:
      "Um autêntico Ramen Japonês: caldo rico e aromático, macarrão artesanal, fatias suculentas de chashu, ovo marinado e cebolinha fresca.",
    image: ramen,
    title: "Ramen Japonês",
  },
  {
    id: 6,
    button: "Adicionar ao carrinho",
    description:
      "Um autêntico Ramen Japonês: caldo rico e aromático, macarrão artesanal, fatias suculentas de chashu, ovo marinado e cebolinha fresca.",
    image: ramen,
    title: "Ramen Japonês",
  },
];

const Japonesa = () => (
  <>
    <FoodsHeader />
    <Banner type="japonesa" tag="Japonesa" title="Hioki Sushi" />
    <FoodList foods={foods} />
  </>
);

export default Japonesa;
