import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], search: string): Cocktail[] | null {
    if(!search.length){
      console.log('res');
      return cocktails;

    } else {
      console.log('retourne element cherché');
      return cocktails.filter(c =>  c.name.toLowerCase().includes(search.toLowerCase()))
    }
  }

}
