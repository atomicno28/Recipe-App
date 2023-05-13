// it serve as framework to create API.
import express from "express";

// allows to setup rules for comm. b/w client and server.
import cors from "cors";

// used to comm to database in express.
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";

const app = express();

//MIDDLEWARE.
app.use(express.json());
app.use(cors());

// constituting all authorisation parts.
app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://nikhillumesh:placement@cluster0.fquwxho.mongodb.net/recipee"
);

app.listen("3001", (req, res) => {
  console.log("SERVER STARTED!!");
});
