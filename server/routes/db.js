const express = require("express");
const dbController = require("../controllers/dbController");
const dbRouter = express.Router();

dbRouter.get("/", dbController.getAllCars, (req, res) => {
  res.status(200).json(res.locals.cars);
});

dbRouter.get("/findOne", dbController.findOneCar, (req, res) => {
  res.status(200).json(res.locals.cars);
});

dbRouter.get("/requestByMake/:make", dbController.getCarsByMake, (req, res) => {
  res.status(200).json({ cars: res.locals.cars });
});

dbRouter.post(
  "/requestByPrice",
  dbController.getCarsByPriceRange,
  (req, res) => {
    res.status(200).json({ cars: res.locals.cars });
  }
);

dbRouter.get(
  "/requestByRange/:min/:max/:make",
  dbController.getByRange,
  (req, res) => {
    res.status(200).json({ cars: res.locals.cars });
  }
);

dbRouter.post("/insertData", dbController.insertCarsData, (req, res) => {
  res.status(200).send("successfully inserted cars data to database");
});

module.exports = dbRouter;
