const User = require('../models/userModels');

const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = (req, res, next) => {
  const qry = 'SELECT * FROM usedcar.users'
  User.query(qry)
    .then((response) => {
      res.locals.users = response.rows;
      console.log("query for all users successful");
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


/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = (req, res, next) => {
  // write code here
  const {username, password} = req.body;
  console.log(req.body);
  const queryObj = {
    text: "SELECT * FROM usedcar.users WHERE username=$1 and password=$2",
    values: [username, password]
  }
  User.query(queryObj)
    .then(doc => {
      console.log('this is doc',doc);
      if(doc.length === 0)  res.locals.found = false;
      else
      {
        res.locals.found = true;
      }
      next();
    })
    .catch(err => {
      next({
        log: `userController.verifyUser: ERROR: ${err}`,
        message: { err: 'Error occured in userController.verifyUser.' }
      })
    })
  
};

module.exports = userController;
