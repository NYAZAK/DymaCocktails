import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cocktailForm = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      desc: [''],
      ingredient: this.fb.array([])
    });
  }


  createCocktail(){
    console.log(this.cocktailForm);
  }

  moreIngredients(): void{
   (<FormArray>this.cocktailForm.get('ingredient')).push(this.fb.group({
     name: [''],
     quantity: ['']
   }))
  }


}
