// it serve as framework to create API.
import express from "express";

// allows to setup rules for comm. b/w client and server.
import cors from "cors";

// used to comm to database in express.
import mongoose from "mongoose";

const app = express();

//MIDDLEWARE.
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://nikhillumesh:placement@cluster0.fquwxho.mongodb.net/Cluster0"
);

app.listen("3002", (req, res) => {
  console.log("SERVER STARTED!!");
});
