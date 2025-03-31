class Shop {
  image: string;
  infos: string[];
  title: string;
  description: string;
  button: string;
  rating: string;
  star: string;
  id: number;
  buttonLink: string;

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    description: string,
    button: string,
    rating: string,
    star: string,
    buttonLink: string
  ) {
    this.id = id;
    this.image = image;
    this.infos = infos;
    this.title = title;
    this.description = description;
    this.button = button;
    this.rating = rating;
    this.star = star;
    this.buttonLink = buttonLink;
  }
}

export default Shop;
