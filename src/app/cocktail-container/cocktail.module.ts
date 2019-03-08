import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CocktailRouting } from './cocktail-routing.module';

import { SharedModule } from '../shared/module/shared.module';
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
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    CocktailRouting
  ], 
  providers: [],
  exports: []
})
export class CocktailModule { }
