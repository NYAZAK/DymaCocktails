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
  public index: number;

  constructor(private activatedR: ActivatedRoute ,private cocktailS: CocktailService, private panierS: PanierService) { }

  ngOnInit() {
    // soit il y a un index dans l'url alors on le recupère (c'est le params index) et sinon on met l'index 0 donc mojito
    this.activatedR.params.subscribe( 
      (params: Params) => {
      if(params.index) {
        this.index = params.index;
        this.cocktail = this.cocktailS.getCocktail(params.index);
      } else {
        this.index = 0;
        this.cocktail = this.cocktailS.getCocktail(0);
      }
    })
  }

  addIngredient(ingredients: Ingredients[]): void{
     this.panierS.addToPanier(ingredients);
  }

  getUrl(): string[]{
    return ['/cocktails', this.index + '', 'edit']; // pour rendre l'index en string on le concatene avec '', on passe de type number à type string
  }

}
