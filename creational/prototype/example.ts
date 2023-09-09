/**
 * This is the Car class representing a car with make and model.
 */
class Car {
  public make: string;
  public model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

/**
 * This is the CarPrototype class which can clone Car objects.
 * It efficiently clones the fields of the Car class.
 */
class CarPrototype {
  public prototype: Car;

  /**
   * Creates a new object by chaining the current instance's prototype.
   * It uses the spread operator to override fields for subsequent prototype objects.
   * @returns A new cloned instance.
   */
  public clone(): this {
    // Create a new object inheriting from the current instance (this).
    const clonedCar = Object.create(this);

    // Override the prototype property to inherit the fields from this.prototype.
    clonedCar.prototype = {
      ...this.prototype,
      prototype: { ...this },
    };

    return clonedCar;
  }
}

/**
 * This is the driver code where we demonstrate cloning objects using CarPrototype.
 */
const driverCode = () => {
  // Create an instance of CarPrototype.
  const car = new CarPrototype();

  /**
   * Creating an object by prototype chaining.
   */
  const toyota = car.clone();
  toyota.prototype.make = "Toyota";
  toyota.prototype.model = "Fortuner";

  /**
   * Creating an object by using the Car constructor.
   */
  const hyundai = car.clone();
  hyundai.prototype = new Car("Hyundai", "Verna");
};

// Execute the driver code to demonstrate object cloning.
driverCode();
