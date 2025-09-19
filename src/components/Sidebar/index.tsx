import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootReducer } from "../../store";
import { clear, close } from "../../store/reducers/cart";
import {
  Overlay,
  Sidebar as StyledSidebar,
  SideContainer,
  SidebarTitle,
  EmptyCart,
} from "./styles";
import Cart from "../Cart";
import Delivery from "../Delivery";
import Payment from "../Payment";
import Confirmation from "../Confirmation";
import { useFormik } from "formik";
import { usePurchaseMutation } from "../../services/api";

import { deliverySchema, paymentSchema } from "../../schemas";

const Sidebar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const [purchase] = usePurchaseMutation();

  const dispatch = useDispatch();

  const [step, setStep] = useState<
    "cart" | "delivery" | "payment" | "confirmation"
  >("cart");

  const [orderId, setOrderId] = useState("");

  const closeSidebar = () => {
    dispatch(close());
  };

  const goToCart = () => {
    setStep("cart");
  };

  const goToDelivery = () => {
    setStep("delivery");
  };

  const goToPayment = () => {
    setStep("payment");
  };

  const goToConfirmation = () => {
    setStep("confirmation");
  };

  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      number: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cvv: "",
      monthIssue: "",
      yearIssue: "",
    },
    validationSchema: step === "delivery" ? deliverySchema : paymentSchema,
    onSubmit: async (values) => {
      if (step === "delivery") {
        goToPayment();
      } else if (step === "payment") {
        const payload = {
          products: items.map((item) => ({
            id: item.id,
            price: item.preco,
          })),
          delivery: {
            receiver: values.fullName,
            address: {
              description: values.address,
              city: values.city,
              number: parseInt(values.number),
              zipCode: values.postalCode,
              complement: values.complement,
            },
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: parseInt(values.cvv),
              expires: {
                month: parseInt(values.monthIssue),
                year: parseInt(values.yearIssue),
              },
            },
          },
        };

        try {
          const response = await purchase(payload).unwrap();
          setOrderId(response.orderId);
          dispatch(clear());
          goToConfirmation();
        } catch (error) {
          console.error("Falha ao processar a compra:", error);
        }
      }
    },
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const renderEmptyCart = () => (
    <>
      <EmptyCart>
        O seu carrinho está vazio. Adicione um prato para continuar.
      </EmptyCart>
    </>
  );

  return (
    <SideContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeSidebar} />
      <StyledSidebar>
        {items.length === 0 && step === "cart" && renderEmptyCart()}

        {items.length > 0 && step === "cart" && (
          <Cart onCheckout={goToDelivery} />
        )}

        {step === "delivery" && (
          <>
            <SidebarTitle>Entrega</SidebarTitle>
            <Delivery
              onCart={goToCart}
              onPayment={form.submitForm}
              form={form}
            />
          </>
        )}

        {step === "payment" && (
          <>
            <SidebarTitle>
              Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
            </SidebarTitle>
            <Payment
              form={form}
              onDelivery={goToDelivery}
              onConfirmation={form.submitForm}
            />
          </>
        )}

        {step === "confirmation" && (
          <>
            <SidebarTitle>Pedido Realizado - {orderId}</SidebarTitle>
            <Confirmation onSuccess={closeSidebar} />
          </>
        )}
      </StyledSidebar>
    </SideContainer>
  );
};

export default Sidebar;
