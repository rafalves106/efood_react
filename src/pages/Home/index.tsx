import ShopsList from "../../components/ShopList";
import ShopsHeader from "../../components/ShopsHeader";

import { useGetShopsQuery } from "../../services/api";

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
  const { data: shops, isLoading } = useGetShopsQuery();

  if (isLoading) {
    return <h2>Carregando lojas...</h2>;
  }

  if (shops && shops.length > 0) {
    return (
      <>
        <ShopsHeader />
        <ShopsList shops={shops} />
      </>
    );
  }

  return <h2>Não foi possível carregar as lojas.</h2>;
};

export default Home;
