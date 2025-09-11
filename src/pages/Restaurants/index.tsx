import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import FoodsHeader from "../../components/FoodsHeader";
import Modal from "../../components/Modal";
import { Shop } from "../Home";
import { Food } from "../Home";

const Restaurante = () => {
  const { id } = useParams<{ id: string }>();

  const [restaurant, setRestaurant] = useState<Shop | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const openModal = (food: Food) => {
    setSelectedFood(food);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFood(null);
  };

  useEffect(() => {
    if (id) {
      fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Restaurante não encontrado");
          }
          return res.json();
        })
        .then((data: Shop) => {
          const cardapioCorrigido = data.cardapio.map((item) => ({
            ...item,
            preco: parseFloat(item.preco.toString()),
          }));

          setRestaurant({
            ...data,
            cardapio: cardapioCorrigido,
          });
        })
        .catch((error) => {
          console.error("Erro ao buscar o restaurante:", error);
        });
    }
  }, [id]);

  if (!restaurant) {
    return <h2>Carregando...</h2>;
  }

  return (
    <>
      <FoodsHeader />
      <Banner shop={restaurant} />
      <FoodList foods={restaurant.cardapio} onFoodClick={openModal} />
      {modalOpen && selectedFood && (
        <Modal food={selectedFood} onClose={closeModal} />
      )}
    </>
  );
};

export default Restaurante;
