import { ImdbPrototype } from "./ImdbPrototype";

export class ImdbMovies {
  private imdbPrototype: ImdbPrototype;
  constructor(prototype: ImdbPrototype) {
    this.imdbPrototype = prototype.clone();
  }

  setMovie(
    title: string,
    language: string,
    genre: string,
    director: string,
    year: number
  ) {
    this.imdbPrototype.prototype.title = title;
    this.imdbPrototype.prototype.language = language;
    this.imdbPrototype.prototype.genre = genre;
    this.imdbPrototype.prototype.director = director;
    this.imdbPrototype.prototype.year = year;
  }

  getMovie() {
    return this.imdbPrototype.prototype;
  }
}
