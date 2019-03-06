import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';

const routes: Routes = [
  {path: 'cocktails', component: CocktailContainerComponent, children: [
    {path: 'new', component: CocktailEditComponent},
    {path: ':index/edit', component: CocktailEditComponent},
    {path: ':index', component: CocktailDetailsComponent},
    {path: '', component: CocktailDetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRouting { }
