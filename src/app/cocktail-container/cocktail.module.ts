import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CocktailRouting } from './cocktail-routing.module';

import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';

// pipe
import { FilterPipe } from '../shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    CocktailsListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailEditComponent,
    FilterPipe
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    CocktailRouting
  ], 
  providers: [],
  exports: []
})
export class CocktailModule { }
