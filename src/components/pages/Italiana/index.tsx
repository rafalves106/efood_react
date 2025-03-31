import Food from "../../../models/Food";
import Banner from "../../Banner";

import marguerita from "../../../assets/images/marguerita.png";
import FoodList from "../../FoodList";
import FoodsHeader from "../../FoodsHeader";

const foods: Food[] = [
  {
    id: 1,
    button: "Adicionar ao carrinho",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    title: "Pizza Marguerita",
  },
  {
    id: 2,
    button: "Adicionar ao carrinho",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    title: "Pizza Marguerita",
  },
  {
    id: 3,
    button: "Adicionar ao carrinho",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    title: "Pizza Marguerita",
  },
  {
    id: 4,
    button: "Adicionar ao carrinho",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    title: "Pizza Marguerita",
  },
  {
    id: 5,
    button: "Adicionar ao carrinho",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    title: "Pizza Marguerita",
  },
  {
    id: 6,
    button: "Adicionar ao carrinho",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: marguerita,
    title: "Pizza Marguerita",
  },
];

const Italiana = () => (
  <>
    <FoodsHeader />
    <Banner type="italiana" tag="Italiana" title="La Dolce Vita Trattoria" />
    <FoodList foods={foods} />
  </>
);

export default Italiana;
