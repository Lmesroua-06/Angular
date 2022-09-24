import { Component, OnInit } from '@angular/core';
import { Food } from '../Food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  foodList: Food [] = [

    {

      nameOfDish: 'pizza',
      rating: 5,
      mainIngredient: 'cheese',
      vegan: true,
      vegetarian: true,
      allergens: true,
    },
    {
      nameOfDish: 'tacos',
      rating: 5,
      mainIngredient: 'meat',
      vegan: false,
      vegetarian: false,
      allergens: false,

    },
    {
      nameOfDish: 'spaghetti meatballs',
      rating: 5,
      mainIngredient: 'pasta',
      vegan: false,
      vegetarian: false,
      allergens: false,

    }

  ]

}
