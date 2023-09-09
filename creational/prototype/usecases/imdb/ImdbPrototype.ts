import { Imdb } from "./Imdb";
import { ImdbInterface } from "./ImdbInterface";

export class ImdbPrototype implements ImdbInterface {
  public prototype: Imdb;
  clone(): this {
    const clonedCar = Object.create(this);
    clonedCar.prototype = {
      ...this.prototype,
      prototype: { ...this },
    };
    return clonedCar;
  }
}
