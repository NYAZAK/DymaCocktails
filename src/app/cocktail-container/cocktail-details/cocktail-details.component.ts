import { Component, OnInit} from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/service-cocktail.service';
@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail; 

  constructor(private cocktailS: CocktailService) { }

  ngOnInit() {
    this.cocktailS.cocktail.subscribe(
      (cocktail: Cocktail) => {
        this.cocktail = cocktail;
      }
    )
  }

}
