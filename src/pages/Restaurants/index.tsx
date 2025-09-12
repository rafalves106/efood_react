import { useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import FoodsHeader from "../../components/FoodsHeader";
import Modal from "../../components/Modal";
import { Food } from "../Home";
import { useGetRestaurantQuery } from "../../services/api";

const Restaurante = () => {
  const { id } = useParams<{ id: string }>();

  const { data: restaurant, isLoading } = useGetRestaurantQuery(id!);

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

  if (isLoading || !restaurant) {
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
