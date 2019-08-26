const express = require("express");
const CreateData = require("../models/create-data");
const authCheck = require("../middlewares/auth-check");

const router = express.Router();

router.post("/add-details", authCheck, (req, res, next) => {
  const studentData = new CreateData({
    name: req.body.name,
    fname: req.body.fname,
    cnumber: req.body.cnumber,
    creator: req.userData.userId
  });
  console.log(req.userData.userId);
  studentData
    .save()
    .then(() => {
      res.status(201);
    })
    .catch(err => console.log(err));
});

router.get("/show-details", authCheck, (req, res, next) => {
  CreateData.find({ creator: req.userData.userId })
    .then(studentData => {
      res.status(200).json({
        studentData: studentData
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;