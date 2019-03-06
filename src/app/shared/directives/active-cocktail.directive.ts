import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveCocktailDirective implements OnChanges {
  @HostBinding('style.backgroundColor') public bgColor: string;
  @HostBinding('style.color') public Color: string;
  @Input('appActive') public isActive: boolean;

  constructor() { }

  ngOnChanges(){ // pour trigger l'action, on utilise le ngonchanges hook pour que la mise à jour se fasse à chaque fois
    if(this.isActive){
      this.bgColor = "#3498db";
      this.Color = "#ffffff";
    } else {
      this.bgColor = 'transparent';
      this.Color = "#000000";
    }
  }

}
