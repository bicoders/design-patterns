export class Imdb {
  public title: string;
  public language: string;
  public genre: string;
  public director: string;
  public year: number;

  constructor(
    title: string,
    language: string,
    genre: string,
    director: string,
    year: number
  ) {
    this.title = title;
    this.language = language;
    this.genre = genre;
    this.director = director;
    this.year = year;
  }
}
