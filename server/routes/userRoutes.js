import express from "express";
import { create } from "../controller/userController.js";
import {
  getAll,
  getone,
  deleteUser,
  update,
} from "../controller/userController.js";

const route = express.Router();
route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getone/:id", getone);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;
