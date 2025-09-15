import { FormikProps } from "formik";
import Button from "../Button";
import { CheckoutContainer, InputGroup, InputRow } from "./styles";
import * as Yup from "yup";

type FormValues = {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  number: string;
  complement: string;
  cardName: string;
  cardNumber: string;
  cvv: string;
  monthIssue: string;
  yearIssue: string;
};

type Props = {
  onPayment: () => void;
  onCart: () => void;
  form: FormikProps<FormValues>;
};

const Delivery = ({ onPayment, onCart, form }: Props) => {
  const getErrorMessage = (fieldName: keyof FormValues): string => {
    const isTouched = form.touched[fieldName];
    const isInvalid = form.errors[fieldName];

    if (isTouched && isInvalid) {
      return form.errors[fieldName] as string;
    }
    return "";
  };

  const handleNextStep = async () => {
    const deliverySchema = Yup.object().shape({
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
    });

    try {
      await deliverySchema.validate(form.values, { abortEarly: false });

      form.setTouched({
        fullName: true,
        address: true,
        city: true,
        postalCode: true,
        number: true,
        complement: true,
      });
      onPayment();
    } catch (errors) {
      console.log("Erros de validação:", errors);
    }
  };

  return (
    <form>
      <CheckoutContainer>
        <InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.values.fullName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <span>{getErrorMessage("fullName")}</span>
        </InputGroup>

        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <span>{getErrorMessage("address")}</span>
        </InputGroup>

        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <span>{getErrorMessage("city")}</span>
        </InputGroup>

        <InputRow>
          <InputGroup>
            <label htmlFor="postalCode">CEP</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={form.values.postalCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <span>{getErrorMessage("postalCode")}</span>
          </InputGroup>

          <InputGroup>
            <label htmlFor="number">Número</label>
            <input
              type="text"
              id="number"
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <span>{getErrorMessage("number")}</span>
          </InputGroup>
        </InputRow>

        <InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <span>{getErrorMessage("complement")}</span>
        </InputGroup>
      </CheckoutContainer>

      <Button
        onClick={handleNextStep}
        type="button"
        title="Continuar para o pagamento"
      >
        Continuar para o pagamento
      </Button>
      <Button onClick={onCart} title="Voltar para o carrinho" type="button">
        Voltar para o carrinho
      </Button>
    </form>
  );
};

export default Delivery;
