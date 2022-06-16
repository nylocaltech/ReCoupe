const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();



userRouter.get("/getAllUsers", userController.getAllUsers, (req, res) => {
  res.status(200).json({ allUsers: res.locals.users });
});


userRouter.post('/verifyUser', userController.verifyUser, (req, res) => {
  res.setHeader("Content-Type","application/json");
  //if it is verified
  if(res.locals.found)
  {
    res.status(200).send(JSON.stringify({success: true,message: 'Log in succeed!'}));
  }
  else 
  {
    //res.status(404).send('Log in failed!');
    res.status(404).send(JSON.stringify({success: false,message: 'Log in failed!'}));
  }
});

module.exports = userRouter;
