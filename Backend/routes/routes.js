
const express = require('express');

const {getTasks,createTask}=require("../controller/controller.js");
const router=express.Router();
router.get("/",getTasks);
router.post("/",createTask);