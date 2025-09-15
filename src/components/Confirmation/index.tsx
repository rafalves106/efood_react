import Button from "../Button";
import { ConfirmationContainer } from "./styles";

type Props = {
  onSuccess: () => void;
};

const Confirmation = ({ onSuccess }: Props) => {
  return (
    <ConfirmationContainer>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
        <br></br>
        <br></br>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
        <br></br>
        <br></br>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br></br>
        <br></br>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>

      <Button onClick={onSuccess} title="Concluir" type="button">
        Concluir
      </Button>
    </ConfirmationContainer>
  );
};

export default Confirmation;
