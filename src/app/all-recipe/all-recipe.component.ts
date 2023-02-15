import { Component, OnInit } from '@angular/core';
import Layer from '../models/Layer';
import Recipe from '../models/Recipe';
import { recipeService } from '../services/reciepe.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {

  arr: Recipe[] = [];
  exist:boolean=false;
 
    constructor(public recipeService:recipeService) { }
  
    ngOnInit(): void {
      this.recipeService.getAllRecipes().subscribe((succ) => {
       
        this.arr = succ;
        console.log(succ)
      },
        (err) => {
          alert("התרחשה שגיאה בקבלת הנתונים");
          console.log(err)
        })
    }
  
    ChangeExist(){
    this.exist=true;
  }

}
