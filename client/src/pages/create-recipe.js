import { set } from "mongoose";
import { useState } from "react";

export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();

    // it will automatically update all the blocks
    const { name, value } = e.target.value;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  {
    return (
      <div className="create-recipe">
        <h2> Create Recipe</h2>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleChange} />
          <label htmlFor="ingredients">Ingredients</label>
          {recipe.ingredients.map((ingredient, idx) => {
            <input
              type="text"
              key={idx}
              name="ingredients"
              value={ingredient}
              onChange
            />;
          })}
          // we're doing this to add ingredients.
          <button onClick={addIngredient}>Add Ingredients</button>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            name="instructions"
            id="instructions"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={handleChange}
          />
          <label htmlFor="cookingTime">Cooking Time (minutes)</label>
          <input
            type="number"
            id="cookingTime"
            onChange={handleChange}
            name="cookingTime"
          />
        </form>
      </div>
    );
  }
};
