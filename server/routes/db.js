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

module.exports = dbRouter;
