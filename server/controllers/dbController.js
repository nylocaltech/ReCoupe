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
dbController.getAllCars = (req, res, next) => {
  // const querObj = {
  //   text: "SELECT * FROM usedcar.cars ORDER BY price;"
  // };

  db.query("SELECT * FROM usedcar.cars ORDER BY price;")
    .then((response) => {
      res.locals.cars = response.rows;
      console.log(res.locals.cars);
      console.log("query for all cars successful");
      return next();
    })
    .catch((err) => {
      return next({
        log: "Error in query for all cars",
        status: 400,
        message: { err: "Error in query for all cars" },
      });
    });
};

dbController.getCarsByMake = (req, res, next) => {
  //const { make } = req.body;
  const { make } = req.params;
  console.log(req, "request object");
  console.log(req.params, "request params");
  console.log(make, "this is make");
  const queryObj = {
    text: "SELECT * FROM usedcar.cars WHERE make = $1 ORDER BY price;",
    values: [make],
  };

  db.query(queryObj)
    .then((response) => {
      res.locals.cars = response.rows;
      console.log("query for cars by make successful");
      return next();
    })
    .catch((err) => {
      return next({
        log: "Error in query for cars by make",
        status: 400,
        message: { err: "An error occurred" },
      });
    });
};

// cars by price range
dbController.getCarsByPriceRange = (req, res, next) => {
  const { minPrice, maxPrice } = req.body;

  const queryObj = {
    text: "SELECT * FROM usedcar.cars WHERE $1 < price AND price < $2 ORDER BY price;",
    values: [minPrice, maxPrice],
  };

  db.query(queryObj)
    .then((response) => {
      res.locals.cars = response.rows;
      console.log("query for cars by price range");
      return next();
    })
    .catch((err) => {
      return next({
        log: "Error in query for cars by price range",
        status: 400,
        message: { err: "An error occurred" },
      });
    });
};

dbController.getByRange = (req, res, next) => {
  const { min, max, make } = req.params;
  console.log(make, min, max);

  const queryObj = {
    text: "SELECT * FROM usedcar.cars WHERE make = $1 AND $2 < price AND price < $3 ORDER BY price;",
    values: [make, min, max],
  };

  db.query(queryObj)
    .then((response) => {
      res.locals.cars = response.rows;
      console.log("query for cars by price range");
      return next();
    })
    .catch((err) => {
      return next({
        log: "Error in query for cars by price range",
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
      res.locals.cars = response.rows;
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
  // const arrOfCarsCom = res.locals.cars;
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
