import { Ingredients } from './ingredients.model';

export class Cocktail {
    constructor(
        public name: string,
        public img: string,
        public description: string,
        public ingredients?: Ingredients[]
    ){}
}
