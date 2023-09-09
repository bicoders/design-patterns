# Prototype Design Pattern

This is an example of implementing the Prototype Design Pattern in TypeScript. The Prototype Design Pattern is a creational design pattern that deals with object creation mechanisms, where objects are created by copying an existing object, known as the prototype.

In this example, we have a `Car` class, and we create a `CarPrototype` class that allows us to efficiently clone `Car` objects. The Prototype pattern allows us to create new objects by copying an existing object, thereby reducing the overhead of creating objects from scratch.

## Code Structure

The code is structured into two classes:

### Car Class

The `Car` class represents a car with `make` and `model` properties.

```typescript
class Car {
  public make: string;
  public model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}
```

### CarPrototype Class

The `CarPrototype` class is responsible for cloning `Car` objects efficiently.

```typescript
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
```

### Driver Code

The driver code demonstrates how to use the `CarPrototype` class to create cloned car objects, both by prototype chaining and using the `Car` constructor.

```typescript
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
```

## Usage

To execute the code and see how the Prototype Design Pattern works, simply run the `driverCode` function.

```typescript
driverCode();
````

## Conclusion

he Prototype Design Pattern is a powerful creational design pattern that allows you to efficiently create new objects by cloning existing ones. In this example, we've shown how to implement the Prototype pattern in TypeScript using the `CarPrototype` class.

Key takeaways from this example:

The `CarPrototype` class efficiently clones `Car` objects by chaining prototypes and using the spread operator to override properties.
Cloning objects can reduce the overhead of object creation and ensure that new objects start with the same initial state as the prototype.
This pattern is particularly useful when dealing with complex objects or scenarios where you need multiple instances with shared properties.

[Click here to view example](./example.ts)
