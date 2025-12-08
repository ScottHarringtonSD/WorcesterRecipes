export default class Review {
  text: string;
  commenter: string;
  rating: number;
  peopleFoundHelpful: number;

  public constructor(
    text: string,
    commenter: string,
    rating: number,
    peopleFoundHelpful: number
  ) {
    this.text = text;
    this.commenter = commenter;
    this.rating = rating;
    this.peopleFoundHelpful = peopleFoundHelpful;
  }
}
