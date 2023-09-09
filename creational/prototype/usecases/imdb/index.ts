import { ImdbMovies } from "./ImdbMovies";
import { ImdbPrototype } from "./ImdbPrototype";

function main() {
  const imdbPrototype = new ImdbPrototype();

  const titanic = new ImdbMovies(imdbPrototype);
  titanic.setMovie(
    "Titanic",
    "English",
    "Romance/Drama",
    "James Cameron",
    1997
  );
  titanic.getMovie();

  /**
   * { prototype: {},
  title: 'Titanic',
  language: 'English',
  genre: 'Romance/Drama',
  director: 'James Cameron',
  year: 1997 }
   */

  const starWars = new ImdbMovies(imdbPrototype);
  starWars.setMovie(
    "Interstellar",
    "English",
    "Sci-Fi",
    "Christopher Nolan",
    2014
  );
  starWars.getMovie();
  /**
   * { prototype: {},
  title: 'Interstellar',
  language: 'English',
  genre: 'Sci-Fi',
  director: 'Christopher Nolan',
  year: 2014 }
   */
}

main();
