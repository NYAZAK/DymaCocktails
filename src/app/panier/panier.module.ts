import {NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { PanierComponent } from './panier.component';
import { panierRoutingModule } from './panier-routing.module';

@NgModule({
    declarations: [PanierComponent, IngredientsListComponent ],
    imports: [CommonModule, panierRoutingModule],

})

export class PanierModule{}