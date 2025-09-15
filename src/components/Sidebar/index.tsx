import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootReducer } from "../../store";
import { clear, close } from "../../store/reducers/cart";
import {
  Overlay,
  Sidebar as StyledSidebar,
  SideContainer,
  SidebarTitle,
} from "./styles";
import Cart from "../Cart";
import Delivery from "../Delivery";
import Payment from "../Payment";
import Confirmation from "../Confirmation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePurchaseMutation } from "../../services/api";

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
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),

      address: Yup.string().required("O campo é obrigatório"),

      city: Yup.string().required("O campo é obrigatório"),

      postalCode: Yup.string()
        .min(10, "O campo precisa ter 10 caracteres")
        .max(10, "O campo precisa ter 10 caracteres")
        .required("O campo é obrigatório"),

      number: Yup.string().required("O campo é obrigatório"),

      complement: Yup.string(),

      cardName: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),

      cardNumber: Yup.string()
        .min(16, "O campo precisa ter 16 caracteres")
        .max(16, "O campo precisa ter 16 caracteres")
        .required("O campo é obrigatório"),

      cvv: Yup.string()
        .min(3, "O campo precisa ter 3 caracteres")
        .max(3, "O campo precisa ter 3 caracteres")
        .required("O campo é obrigatório"),

      monthIssue: Yup.string()
        .min(2, "O campo precisa ter 2 caracteres")
        .max(2, "O campo precisa ter 2 caracteres")
        .required("O campo é obrigatório"),

      yearIssue: Yup.string()
        .min(4, "O campo precisa ter 4 caracteres")
        .max(4, "O campo precisa ter 4 caracteres")
        .required("O campo é obrigatório"),
    }),
    onSubmit: async (values) => {
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
    <p>O seu carrinho está vazio. Adicione um prato para continuar.</p>
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
            <Delivery onCart={goToCart} onPayment={goToPayment} form={form} />
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
              onConfirmation={goToConfirmation}
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
