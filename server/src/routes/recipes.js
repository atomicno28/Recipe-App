import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";

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
  // res.json({message:"Dish added."})

  // this is just an alternative.
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

export { router as recipesRouter };
