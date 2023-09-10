# IMDb Movie Database Prototype Implementation

## Code Structure

### `Imdb.ts`

This file defines the `Imdb` class, which represents a movie with properties like title, language, genre, director, and year.

### `ImdbInterface.ts`

This file defines an interface called `ImdbInterface` with a `clone()` method. This interface is implemented by classes that can be cloned using the Prototype pattern.

### `ImdbMovies.ts`

The `ImdbMovies` class is responsible for setting and getting movie details. It accepts an `ImdbPrototype` instance during construction and uses it to create and manage movie objects.

### `ImdbPrototype.ts`

The `ImdbPrototype` class implements the `ImdbInterface` interface and contains a `clone` method. This class is used to create clones of `Imdb` objects efficiently.

### `index.ts`

This is the entry point of the application. It demonstrates the usage of the IMDb movie database by creating `ImdbMovies` instances, setting movie details, and retrieving them.

## Usage

To get started with the IMDb movie database prototype, follow these steps:

1. **Prerequisites**: Ensure that you have the following prerequisites installed on your system:

   - Node.js version 18 or higher
   - Yarn package manager

2. **Install Dependencies**: Open your terminal and navigate to the project directory. Run the following command to install project dependencies using Yarn:

   ```bash
   yarn install

   ```

3. **Build usecase**: To build all the design patterns use cases, run the following command:

   ```bash
   yarn build

   ```

4. **Development Mode (Optional)**: If you want to build and watch for changes in real-time during development, you can use the following command:

   ```bash
   yarn dev

   ```

5. **Start a Design Pattern**: To start a specific design pattern, use the following command, replacing `prototype-imdb` with the desired pattern name:

   ```bash
   yarn start-prototype-imdb

   ```
