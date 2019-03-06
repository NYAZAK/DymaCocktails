import { Injectable } from '@angular/core';
import { Ingredients } from '../models/ingredients.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public panier: BehaviorSubject<Ingredients[]> = new BehaviorSubject<Ingredients[]>(null);

  constructor() { }

  addToPanier(ingredients: Ingredients[]){
    const currentValue = this.panier.value;
    if(currentValue && currentValue.length){
      this.panier.next(currentValue.concat(ingredients))
    } else {
      this.panier.next(ingredients);
    }
  }
}
