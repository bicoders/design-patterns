import { Options } from 'tsup'

const prototype: Options = {
  entry: ['creational/prototype/usecases/imdb/index.ts'],
  outDir: 'creational/prototype/usecases/imdb/dist',
  splitting: false,
}

export default [prototype]
