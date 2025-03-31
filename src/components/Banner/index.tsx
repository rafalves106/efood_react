import { Imagem, Titulo } from "./styles";
import banneritaliana from "../../assets/images/banneritaliana.jpg";
import bannerjaponesa from "../../assets/images/bannerjaponesa.png";
import Tag from "../Tag";

type Props = {
  type: "italiana" | "japonesa";
  tag: string;
  title: string;
};

const Banner = ({ type = "italiana", tag, title }: Props) => {
  const backgroundImage = type === "japonesa" ? bannerjaponesa : banneritaliana;

  return (
    <Imagem style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <Tag size="big">{tag}</Tag>
        <Titulo>{title}</Titulo>
      </div>
    </Imagem>
  );
};

export default Banner;
