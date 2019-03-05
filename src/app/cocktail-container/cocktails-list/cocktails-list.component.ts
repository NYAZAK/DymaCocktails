import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/service-cocktail.service';
import { Subscriber } from 'rxjs';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
  providers: [FilterPipe]
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];
  public activeCocktail: number = 0;
  public search: string = '';
  constructor(private cocktailS: CocktailService) { }

  ngOnInit() {
    this.cocktailS.cocktails.subscribe(
      (cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      }
    )
  }


}
