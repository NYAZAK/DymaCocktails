import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from 'src/app/shared/models/ingredients.model';
import { PanierService } from '../../shared/services/panier.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit, OnDestroy {
public ingredients: Ingredients[] = [
  new Ingredients('lemon', 2),
];

private subscription: Subscription;

  constructor(private  panierS: PanierService) { }

  ngOnInit() {
   this.subscription =  this.panierS.panier.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;

      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    
  }

}
