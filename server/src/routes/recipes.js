import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // empty object means that we can obviously find based on specific fields.
    const response = await RecipeModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  // const {name,ingredients,instructions,imageUrl,cookingTime} = req.body;
  // const user = await RecipeModel.findOne({name});
  // if(!user) res.json({message:"Dish already present."})
  // const newUser = new RecipeModel({name,ingredients,instructions,imageUrl,cookingTime});
  // await newUser.save();
  // res.json({m essage:"Dish added."})

  // this is just an alternative.
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);

    // add something to the user with that ID.
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

router.get("/savedRecipes/ids", async (req, res) => {
  try {
    const user = await UserModel.findByiId(req.body.userID);
    res.json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

router.get("/savedRecipes/", async (req, res) => {
  try {
    const user = await UserModel.findByiId(req.body.userID);
    const savedRecipes = await RecipeModel.find({
      // id is in user's recipes.
      _id: { $in: user.savedRecipes },
    });
    res.json({ savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

export { router as recipesRouter };
