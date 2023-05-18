import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        alert("An error occurred while creating the recipe.");
        console.error(err);
      }
    };
    fetchRecipe();
  }, []);
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe._id}>
              <div>
                <h1>{recipe.name}</h1>
              </div>
              <div className="instructions">
                <p> {recipe.instructions}</p>
              </div>
              <img src={recipe.imageUrl} alt={recipe.name} />
              <p> Cooking Time: {recipe.cookingTime}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
