import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Corrected cors middleware usage
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`); // Corrected variable name
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
