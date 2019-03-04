import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CocktailService } from 'src/app/shared/services/service-cocktail.service';
@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;



  constructor(private fb: FormBuilder, private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailForm = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      description: [''],
      ingredients: this.fb.array([])
    });
  }


  createCocktail(){
    console.log(this.cocktailForm.value);
    this.cocktailService.addNewCocktail(this.cocktailForm.value);
  }

  moreIngredients(): void{
   (<FormArray>this.cocktailForm.get('ingredients')).push(this.fb.group({
     name: [''],
     quantity: ['']
   }))
  }


}
