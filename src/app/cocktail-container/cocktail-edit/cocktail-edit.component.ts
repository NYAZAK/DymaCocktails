import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CocktailService } from 'src/app/shared/services/service-cocktail.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;
  public cocktail: Cocktail;
  public edit: boolean;

  constructor(private fb: FormBuilder, private cocktailService: CocktailService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activeRoute.params.subscribe((params: Params) => {
      if(params.index){
      this.edit = true;
      this.cocktailService.getCocktail(params.index).subscribe(
         (cocktail:Cocktail) =>  { this.cocktail = cocktail 
          this.initForm(this.cocktail);
        });
     
      } else {
        this.initForm();
        this.edit= false;
      }
    });


  }

  initForm(cocktail = {name: '', img: '', description: '', ingredients: []}){
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description],
      ingredients: this.fb.array(cocktail.ingredients
        .map(ingredient => this.fb.group({name: [ingredient.name], quantity: [ingredient.quantity]})))
    });
  }


  createCocktail(){
    console.log(this.cocktailForm.value);
    if(this.edit){
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addNewCocktail(this.cocktailForm.value);

    }
  }

  moreIngredients(): void{
   (<FormArray>this.cocktailForm.get('ingredients')).push(this.fb.group({
     name: [''],
     quantity: ['']
   }))
  }


}
