import { Component, OnInit} from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/service-cocktail.service';
import { Ingredients} from '../../shared/models/ingredients.model';
import { PanierService } from '../../shared/services/panier.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail; 

  constructor(private activatedR: ActivatedRoute ,private cocktailS: CocktailService, private panierS: PanierService) { }

  ngOnInit() {
    // this.cocktailS.cocktail.subscribe(
    //   (cocktail: Cocktail) => {
    //     this.cocktail = cocktail;
    //   }
    // )
    this.activatedR.params.subscribe( (params: Params) => {
      if(params) {
        this.cocktail = this.cocktailS.getCocktail(params.index);
      } else {
        this.cocktail = this.cocktailS.getCocktail(0);
      }
    })
  }

  addIngredient(ingredients: Ingredients[]): void{
     this.panierS.addToPanier(ingredients);
  }

}
