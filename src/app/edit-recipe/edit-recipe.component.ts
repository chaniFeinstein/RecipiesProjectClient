import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Recipe from '../models/Recipe';
import { recipeService } from '../services/reciepe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  myRecipe:Recipe=new Recipe("",0,0,0,null,null,0,null,false)
  insVal=""
  constructor(public myActive:ActivatedRoute,public recipeSer:recipeService) {
  this.myActive.params.subscribe(s => {
  this.recipeSer.getRecipeById(s["id"]).subscribe(succ => this.myRecipe = succ);
    })
   }
   editInstruction(index,item){
    this.myRecipe.Preparation[index]=item;
   }
   editComponent(index,item){
     this.myRecipe.Layers[0].Components[index]=item 
  }
  addComponent(item){
  this.myRecipe.Layers[0].Components.push(item)
 } 
 addInstruction(item){
   this.myRecipe.Preparation.push(item)
 }
 saveChanges(form){
   this.myRecipe.AddDate=new Date();
   this.myRecipe.IsDisplay=true
   this.recipeSer.updateRecipe(this.myRecipe.Id,this.myRecipe).subscribe(succ=>console.log(succ)
  
   )
   form.reset();
 }
  ngOnInit(): void {
  }

}
