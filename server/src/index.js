import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

// middleware

// data that is coming from frontend will automatically be converted into JSON.
app.use(express.json());

app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

// database establish.
mongoose.connect(
  process.env.MONGODBURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started"));
