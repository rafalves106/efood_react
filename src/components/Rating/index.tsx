import { RateNumber, RatingSection, Star } from "./style";

type Props = {
  title: string;
  image: string;
};

const Rating = ({ title, image }: Props) => (
  <RatingSection>
    <RateNumber>{title}</RateNumber>
    <Star src={image} alt={image} />
  </RatingSection>
);

export default Rating;
