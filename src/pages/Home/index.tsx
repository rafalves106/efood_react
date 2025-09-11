import ShopsList from "../../components/ShopList";
import ShopsHeader from "../../components/ShopsHeader";
import { useEffect, useState } from "react";

export type Food = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Shop = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Food[];
};

const Home = () => {
  const [shops, setShop] = useState<Shop[]>([]);

  useEffect(() => {
    fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setShop(res));
  }, []);

  return (
    <>
      <ShopsHeader />
      <ShopsList shops={shops} />
    </>
  );
};

export default Home;
