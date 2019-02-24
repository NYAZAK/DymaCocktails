import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail';
@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
public cocktail: Cocktail =  new Cocktail('Mojito', 'https://static.cuisineaz.com/240x192/i14978-recette-de-mojito.jpeg', 'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.');
  constructor() { }

  ngOnInit() {
  }

}
