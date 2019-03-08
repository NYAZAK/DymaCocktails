import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  {path: 'panier', loadChildren: './panier/panier.module#PanierModule'} // seule façon de faire communiquer avec le panier 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
