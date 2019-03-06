import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map} from 'rxjs/operators';
import { Ingredients } from '../models/ingredients.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);
    // [
    //   new Cocktail(
    //     'Mojito', 
    //     'https://static.cuisineaz.com/240x192/i14978-recette-de-mojito.jpeg', 
    //     'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.'
    //     , [
    //       new Ingredients('perrier', 1), 
    //       new Ingredients('citron', 2), 
    //       new Ingredients('sucre', 3), 
    //     ]),
    //   new Cocktail(
    //     'Margarita', 
    //     'https://chefcuisto.com/files/2013/10/margarita.jpg',
    //     "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila",
    //     [
    //       new Ingredients('limonade', 1),
    //       new Ingredients('citron', 2),
    //       new Ingredients('sel', 3)
    //     ]),
    //   new Cocktail(
    //     'Sour', 
    //     'https://cdn.diffordsguide.com/contrib/stock-images/2017/1/12/201754463017ec926f0d222578ec939a4435.jpg', 
    //     "Traduit de l'anglais-Un sour est une famille traditionnelle de boissons mélangées. La Margarita et le sidecar sont des exemples courants. Les Sours appartiennent à l'une des vieilles familles de cocktails originaux et sont décrits par Jerry Thomas dans son livre de 1862, How to Mix Drinks",
    //     [
    //       new Ingredients('perrier', 1),
    //       new Ingredients('jus de fraise', 2)
    //     ]),
    // ]
    // );

  constructor(private http: HttpClient ){
    // requette pour envoyer une première fois les infos
    // this.http.put('https://http-3d11a.firebaseio.com/cocktails.json', this.cocktails.value)
    // .subscribe(
    //   res => console.log(res)
    // )
    this.initCocktail();
  }


  initCocktail(): void{
    this.http.get<Cocktail[]>('https://http-3d11a.firebaseio.com/cocktails.json').subscribe(
      (cocktail: Cocktail[]) => this.cocktails.next(cocktail)
    )
  }

  getCocktail(index: number): Observable<Cocktail>{
    return this.cocktails.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null ),
      map( (cocktails: Cocktail[]) =>  Cocktail[index])
      );
  }

  addNewCocktail(cocktail: Cocktail){
    const cocktails = this.cocktails.value.slice();
    cocktails.push({
      name: cocktail.name,
      img: cocktail.img,
      description: cocktail.description,
      ingredients: cocktail.ingredients
    });
    this.cocktails.next(cocktails);
  }

  editCocktail(editcocktail: Cocktail): void{
      const cocktails = this.cocktails.value.slice(); // copie par valeur pour ne pas modifier le tableau, au lieu prdocuit un faux tableau...
      // on veut trouver l'index du cocktail qu'on veut modifier
      // pour ensuite l'éditer on va utiliser la methode map puis indexof 
      // comme on peut pas faire indexof d'un objet alors on fait un map sur nos elements avec leur nom 
      const index = cocktails.map(c => c.name).indexOf(editcocktail.name);
      cocktails[index] = editcocktail;
      this.cocktails.next(cocktails);
  }
}
