import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';

const routes: Routes = [
  {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  {path: 'panier', component: PanierComponent},
  {path: 'cocktails', component: CocktailContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
