// modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CocktailModule } from './cocktail-container/cocktail.module';

// Directive
import { ActiveCocktailDirective } from './shared/directives/active-cocktail.directive';


// components
import { AppComponent } from './app.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { SharedModule } from './shared/module/shared.module';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    ActiveCocktailDirective,
    PanierComponent,
    IngredientsListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CocktailModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
