import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/models/ingredients.model';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {
public ingredients: Ingredients[] = [
  new Ingredients('lemon', 2),
];

  constructor() { }

  ngOnInit() {
  }

}
