import ShopsList from "../../ShopList";
import ShopsHeader from "../../ShopsHeader";
import Shop from "../../../models/Shop";

import ladolce from "../../../assets/images/La Dolce.png";
import hiokisushi from "../../../assets/images/Hioki Sushi.png";
import star from "../../../assets/images/estrela.png";

const shops: Shop[] = [
  {
    id: 1,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    image: hiokisushi,
    button: "Saiba Mais",
    infos: ["Destaque da Semana", "Japonesa"],
    rating: "4.9",
    star: star,
    title: "Hioki Sushi",
    buttonLink: "/japonesa",
  },
  {
    id: 2,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladolce,
    button: "Saiba Mais",
    infos: ["Italiana"],
    rating: "4.6",
    star: star,
    title: "La Dolce Vita Trattoria",
    buttonLink: "/italiana",
  },
  {
    id: 3,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladolce,
    button: "Saiba Mais",
    infos: ["Italiana"],
    rating: "4.6",
    star: star,
    title: "La Dolce Vita Trattoria",
    buttonLink: "/italiana",
  },
  {
    id: 4,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladolce,
    button: "Saiba Mais",
    infos: ["Italiana"],
    rating: "4.6",
    star: star,
    title: "La Dolce Vita Trattoria",
    buttonLink: "/italiana",
  },
  {
    id: 5,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladolce,
    button: "Saiba Mais",
    infos: ["Italiana"],
    rating: "4.6",
    star: star,
    title: "La Dolce Vita Trattoria",
    buttonLink: "/italiana",
  },
  {
    id: 6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: ladolce,
    button: "Saiba Mais",
    infos: ["Italiana"],
    rating: "4.6",
    star: star,
    title: "La Dolce Vita Trattoria",
    buttonLink: "/italiana",
  },
];

const Home = () => (
  <>
    <ShopsHeader />
    <ShopsList shops={shops} />
  </>
);

export default Home;
