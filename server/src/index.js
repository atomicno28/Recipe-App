// it serve as framework to create API.
import express from "express";

// allows to setup rules for comm. b/w client and server.
import cors from "cors";

// used to comm to database in express.
import mongoose from "mongoose";

// for users.
import { userRouter } from "./routes/users.js";

// for recipe.
import { recipesRouter } from "./routes/recipes.js";

import { database_link } from "../config.js";

const app = express();

//MIDDLEWARE.
app.use(express.json());
app.use(cors());

// constituting all authorisation parts.
app.use("/auth", userRouter);

// constituting all recipe parts;
app.use("/recipes", recipesRouter);

mongoose.connect(database_link);

app.listen("3001", (req, res) => {
  console.log("SERVER STARTED!!");
});
