export default class Review {
  text: string;
  commenter: string;
  rating: number;

  public constructor(text: string, commenter: string, rating: number) {
    this.text = text;
    this.commenter = commenter;
    this.rating = rating;
  }
}
