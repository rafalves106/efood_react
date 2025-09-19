import { FormikProps } from "formik";
import Button from "../Button";
import { CheckoutContainer, InputGroup, InputRow } from "../Delivery/styles";
import { InputRowCard } from "./styles";

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
  onDelivery: () => void;
  onConfirmation: () => void;
  form: FormikProps<FormValues>;
};

const Payment = ({ onDelivery, onConfirmation, form }: Props) => {
  const getErrorMessage = (fieldName: keyof FormValues): string => {
    const isTouched = form.touched[fieldName];
    const isInvalid = form.errors[fieldName];

    if (isTouched && isInvalid) {
      return form.errors[fieldName] as string;
    }
    return "";
  };

  const handleFinalSubmit = () => {
    form.submitForm();
  };

  return (
    <form>
      <CheckoutContainer>
        <InputGroup>
          <label htmlFor="cardName">Nome no cartão</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={form.values.cardName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <span>{getErrorMessage("cardName")}</span>
        </InputGroup>

        <InputRowCard>
          <InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              pattern="\d{16}"
              title="O número do cartão deve conter 16 dígitos"
            />
            <span>{getErrorMessage("cardNumber")}</span>
          </InputGroup>

          <InputGroup>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              pattern="\d{3}"
              title="O CVV deve conter 3 dígitos"
            />
            <span>{getErrorMessage("cvv")}</span>
          </InputGroup>
        </InputRowCard>

        <InputRow>
          <InputGroup>
            <label htmlFor="monthIssue">Mês de vencimento</label>
            <input
              type="text"
              id="monthIssue"
              name="monthIssue"
              value={form.values.monthIssue}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              pattern="\d{2}"
              title="O mês deve conter 2 dígitos"
            />
            <span>{getErrorMessage("monthIssue")}</span>
          </InputGroup>

          <InputGroup>
            <label htmlFor="yearIssue">Ano de vencimento</label>
            <input
              type="text"
              id="yearIssue"
              name="yearIssue"
              value={form.values.yearIssue}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              pattern="\d{4}"
              title="O ano deve conter 4 dígitos"
            />
            <span>{getErrorMessage("yearIssue")}</span>
          </InputGroup>
        </InputRow>
      </CheckoutContainer>

      <Button
        onClick={handleFinalSubmit}
        type="button"
        title="Finalizar pagamento"
      >
        Finalizar pagamento
      </Button>
      <Button
        onClick={onDelivery}
        title="Voltar para a edição de endereço"
        type="button"
      >
        Voltar para a edição de endereço
      </Button>
    </form>
  );
};

export default Payment;
