import { FormikProps } from "formik";
import Button from "../Button";
import { CheckoutContainer, InputGroup, InputRow } from "./styles";

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
              pattern="\d{5}-\d{3}"
              title="Formato de CEP inválido. Use 12345-678"
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
              pattern="\d+"
              title="O campo deve conter apenas números"
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
        onClick={onPayment}
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
