const db = require("../models/dbModels.js");

const dbController = {};

// dbController.getCarsByMakeAndModel = async (req, res, next) => {
//   try {
//     const { make, model } = req.body;
//     const queryObj = {
//       text: 'SELECT * FROM usedcar.cars WHERE make = $1 AND model = $2 ORDER BY price;',
//       values: [ make, model ]
//     };

//     db.query(queryObj)
//       .then(response => {
//         res.locals.carsByMakeAndModel = response.rows;
//         console.log('query for cars by make and model successful');
//         return next();
//       });

//      }
//      catch(err){
//       return next({
//         log: "Error in query for cars by make and model",
//         status: 400,
//         message: { err: "An error occurred" }),
//      };
// };

dbController.getCarsByMakeAndModel = (req, res, next) => {
  const { make, model } = req.body;

  const queryObj = {
    text: "SELECT * FROM usedcar.cars WHERE make = $1 AND model = $2 ORDER BY price;",
    values: [make, model],
  };

  db.query(queryObj)
    .then((response) => {
      res.locals.carsByMakeAndModel = response.rows;
      console.log("query for cars by make and model successful");
      return next();
    })
    .catch((err) => {
      return next({
        log: "Error in query for cars by make and model",
        status: 400,
        message: { err: "An error occurred" },
      });
    });
};

dbController.insertCarsData = (req, res, next) => {
  const { price, image, mileage, year, make, model, url, zip, date, dealer } =
    req.body;

  const queryObj = {
    text: "INSERT INTO usedcar.cars (price, image, mileage, year, make, model, url, zip, date, dealer) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);",
    values: [price, image, mileage, year, make, model, url, zip, date, dealer],
  };

  db.query(queryObj)
    .then((response) => {
      return next();
    })
    .catch((err) => {
      return next({
        log: "Error adding data to database",
        status: 400,
        message: {
          err: "An error occurred while trying to add data to database",
        },
      });
    });
};

dbController.findOneCar = (req, res, next) => {
  const { price, mileage, model } = req.body;

  const queryObj = {
    text: "SELECT * FROM usedcar.cars WHERE price = $1 AND mileage = $2 AND model = $3;",
    values: [price, mileage, model],
  };

  db.query(queryObj)
    .then((response) => {
      res.locals.carData = response.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: "Error in query based on price mileage and model",
        status: 400,
        message: {
          err: "An error in query based on price mileage and model",
        },
      });
    });
};

dbController.populateDb = (req, res, next) => {
  const arrOfCarsCom = res.locals.carsComData;
  // const arrOfTrueCarData = res.locals.trueCarData.slice();
  // const arrOfAutoTraderData = res.locals.autoTraderData.slice();
  console.log(arrOfCarsCom);

  // let vendor;
  // const date = "2022-06-16";

  // const queryObj = {
  //   text: "INSERT INTO usedcar.cars (price, image, mileage, year, make, model, url, zip, dealer, date) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ON CONFLICT ON CONSTRAINT url DO NOTHING;",
  //   values: [price, image, mileage, year, make, model, url, zip, vendor, date],
  // };

  arrOfCarsCom.forEach((dealer) => {
    // if (dealer === arrOfCarsCom)
    // vendor = "cars.com";
    // else if (dealer === arrOfTrueCarData) vendor = "truecar.com";
    // else if (dealer === arrOfAutoTraderData) vendor = "autotrader.com";
    // dealer.forEach((vehicle) => {

    const queryObj = {
      text: "INSERT INTO usedcar.cars (price, image, mileage, year, make, model, url, zip, dealer, date) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ON CONFLICT ON CONSTRAINT url DO NOTHING;",
      values: [
        price,
        image,
        mileage,
        year,
        make,
        model,
        url,
        zip,
        date,
        "cars.com",
      ],
    };

    const { price, image, mileage, year, make, model, url, zip } = vehicle;

    db.query(queryObj).catch((err) => {
      return next({
        log: "Error adding data to database",
        status: 400,
        message: {
          err: "An error occurred while trying to add data to database",
        },
      });
    });
  });
  return next();
};

module.exports = dbController;
