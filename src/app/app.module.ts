// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CocktailModule } from './cocktail-container/cocktail.module';

// Directive
import { ActiveCocktailDirective } from './shared/directives/active-cocktail.directive';
// components
import { AppComponent } from './app.component';
import { SharedModule } from './shared/module/shared.module';
// import { PanierModule } from './panier/panier.module'; // supprime les reference pour le lazy loading 
import { PanierService } from './shared/services/panier.service';


@NgModule({
  declarations: [
    AppComponent,
    ActiveCocktailDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CocktailModule,
   // PanierModule,
    SharedModule,
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
