import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
  }

  function handleClick (id) {
    const newFoodArray = foods.filter((food) => food.id !== id)
    setFoods(newFoodArray)
  }
  
  function handleLiClick(id) {
    // .map will iterate through the array and return a new array
    // if the id of the food we are iterating over matches the id of the food we are updating, return a new food object with the healt leavel incremented by 1
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
         return {
          ...food, 
          heatLevel: food.heatLevel + 1
         }
      } else {
          return food
       } 
    })
    setFoods(newFoodArray)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
