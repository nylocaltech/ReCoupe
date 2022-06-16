const express = require("express");
const dbController = require("../controllers/dbController");
const dbRouter = express.Router();

dbRouter.post("/request", dbController.getCarsByMakeAndModel, (req, res) => {
  res.status(200).json({ carsByMakeAndModel: res.locals.carsByMakeAndModel });
});

dbRouter.post("/test", (req, res) => {
  console.log("hello");
  res.status(200).send("hello");
});

dbRouter.get("/findOne", dbController.findOneCar, (req, res) => {
  res.status(200).json(res.locals.carData);
});

dbRouter.post("/insertData", dbController.insertCarsData, (req, res) => {
  res.status(200).send("successfully inserted cars data to database");
});

module.exports = dbRouter;
