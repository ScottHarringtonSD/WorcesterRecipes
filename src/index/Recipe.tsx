import Review from "./Review";

export default class Recipe {
  id: number;
  title: string;
  chef: string;
  type: "drink" | "meal" | "dessert";
  servingSize: string | null;
  preamble: string | null;
  ingredients: string[];
  instructions: string[];
  tips: string[] | null;
  reviews: Review[] | null;
  warning: string | null;
  pictureLink: string | undefined;

  constructor({
    id,
    title,
    chef,
    type,
    servingSize = null,
    preamble = null,
    ingredients = [],
    instructions = [],
    tips = null,
    reviews = null,
    warning = null,
    pictureLink = undefined,
  }: {
    id: number;
    title: string;
    chef: string;
    type: "drink" | "meal" | "dessert";
    servingSize?: string | null;
    preamble?: string | null;
    ingredients?: string[];
    instructions?: string[];
    tips?: string[] | null;
    reviews?: Review[] | null;
    warning?: string | null;
    pictureLink?: string | undefined;
  }) {
    this.id = id;
    this.title = title;
    this.chef = chef;
    this.type = type;
    this.servingSize = servingSize;
    this.preamble = preamble;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tips = tips;
    this.reviews = reviews;
    this.pictureLink = pictureLink;
    this.warning = warning;
  }
}
