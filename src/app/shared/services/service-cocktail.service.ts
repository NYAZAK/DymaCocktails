import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';
import { Ingredients } from '../models/ingredients.model';
@Injectable({
  providedIn: 'root'
})


export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(
    [
      new Cocktail(
        'Mojito', 
        'https://static.cuisineaz.com/240x192/i14978-recette-de-mojito.jpeg', 
        'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.'
        , [
          new Ingredients('perrier', 1), 
          new Ingredients('citron', 2), 
          new Ingredients('sucre', 3), 
        ]),
      new Cocktail(
        'Margarita', 
        'https://chefcuisto.com/files/2013/10/margarita.jpg',
        "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila",
        [
          new Ingredients('limonade', 1),
          new Ingredients('citron', 2),
          new Ingredients('sel', 3)
        ]),
      new Cocktail(
        'Sour', 
        'https://cdn.diffordsguide.com/contrib/stock-images/2017/1/12/201754463017ec926f0d222578ec939a4435.jpg', 
        "Traduit de l'anglais-Un sour est une famille traditionnelle de boissons mélangées. La Margarita et le sidecar sont des exemples courants. Les Sours appartiennent à l'une des vieilles familles de cocktails originaux et sont décrits par Jerry Thomas dans son livre de 1862, How to Mix Drinks",
        [
          new Ingredients('perrier', 1),
          new Ingredients('jus de fraise', 2)
        ]),
    ]
  );

    public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);


  constructor() { }

  selectCocktail(index: number): void{
      this.cocktail.next(this.cocktails.value[index]); 
  }
}
