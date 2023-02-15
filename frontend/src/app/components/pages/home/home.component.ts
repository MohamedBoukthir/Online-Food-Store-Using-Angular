import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(
    private foodServices:FoodService , activatedRoute:ActivatedRoute){
      let foodsObservalbe:Observable<Food[]>;
      activatedRoute.params.subscribe((params) =>{
        if(params.searchTerm)
        foodsObservalbe = this.foodServices.getAllFoodsBySearchTerm(params.searchTerm);
        else if(params.tag)
        foodsObservalbe = this.foodServices.getAllFoodsByTag(params.tag);
        else
        foodsObservalbe = foodServices.getAll();

        foodsObservalbe.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })

      })
    }


  ngOnInit(): void {
  }
}
