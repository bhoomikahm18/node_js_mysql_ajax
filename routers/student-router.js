const express = require("express");

const { homePage, insertValues } = require("../controller/student-contoller.js");

const studentRouter = express.Router();

studentRouter.get("/", homePage);
studentRouter.post("/", insertValues);

module.exports = studentRouter;