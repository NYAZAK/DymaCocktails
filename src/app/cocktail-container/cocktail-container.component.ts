import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';
@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
    new Cocktail('Mojito', 'https://static.cuisineaz.com/240x192/i14978-recette-de-mojito.jpeg', 'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.'),
    new Cocktail('Margarita', 'https://chefcuisto.com/files/2013/10/margarita.jpg', "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila"),
    new Cocktail('Sour', 'https://cdn.diffordsguide.com/contrib/stock-images/2017/1/12/201754463017ec926f0d222578ec939a4435.jpg', "Traduit de l'anglais-Un sour est une famille traditionnelle de boissons mélangées. La Margarita et le sidecar sont des exemples courants. Les Sours appartiennent à l'une des vieilles familles de cocktails originaux et sont décrits par Jerry Thomas dans son livre de 1862, How to Mix Drinks"),
  ];

  public cocktail: Cocktail;
  constructor() { }

  ngOnInit() {
    this.cocktail = this.cocktails[0];
  }

}