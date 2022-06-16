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

module.exports = dbController;
