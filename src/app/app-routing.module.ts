import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  {path: 'panier', component: PanierComponent},
  {path: 'cocktails', component: CocktailContainerComponent, children: [
    {path: '', component: CocktailDetailsComponent},
    {path: ':index', component: CocktailDetailsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
