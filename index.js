import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3003;
const uri = process.env.ATLAS_URI;

import { registerRoute } from "./routers/register.js";

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection has error:"));
  db.once("open", () => {
    console.log("Database Connected");
  });

  app.use("/register",registerRoute);

app.listen(port, () => console.log(`Listening At Port ${port}`));