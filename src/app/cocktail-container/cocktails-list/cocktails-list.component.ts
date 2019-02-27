import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/service-cocktail.service';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];
  public activeCocktail: number = 0;
  constructor(private cocktailS: CocktailService) { }

  ngOnInit() {
    this.cocktailS.cocktails.subscribe(
      (cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      }
    )
  }

  pockCocktail(index: number): void{
    this.activeCocktail = index;
    this.cocktailS.selectCocktail(index);
    console.log(this.activeCocktail);
  }

}
