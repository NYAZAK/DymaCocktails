import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  {path: 'panier', component: PanierComponent},
  {path: 'cocktails', component: CocktailContainerComponent, children: [
    {path: 'new', component: CocktailEditComponent},
    {path: ':index/edit', component: CocktailEditComponent},
    {path: ':index', component: CocktailDetailsComponent},
    {path: '', component: CocktailDetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
