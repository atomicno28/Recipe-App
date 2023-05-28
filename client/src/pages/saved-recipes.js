import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();
  //can add a conditional check to ensure that userID is not empty before making the API request.
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        if (userID) {
          const response = await axios.get(
            `http://localhost:3001/recipes/savedRecipes/${userID}`
          );
          setSavedRecipes(response.data.savedRecipes);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
