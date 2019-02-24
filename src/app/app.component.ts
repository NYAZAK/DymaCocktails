import { Component } from '@angular/core';
import { Cocktail } from './shared/cocktail';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktails';
  cocktail = new Cocktail('mojito');
}
