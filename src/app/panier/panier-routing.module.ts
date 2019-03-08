
import { Route, RouterModule } from '@angular/router';
import {PanierComponent} from './panier.component';

const PANIER_ROUTE: Route[] =  [
    {path: '', component: PanierComponent},
]

  export const panierRoutingModule = RouterModule.forChild(PANIER_ROUTE);