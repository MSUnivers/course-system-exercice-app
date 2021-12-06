const express = require("express");
const ClassModel = require("../models/classModel");
const {addClassController,getAllClasses,getClassById}=require('../controllers/classController')

const router = express.Router();
router.post("/", addClassController)

router.get("/all", getAllClasses);
router.get('/:cid',getClassById)

module.exports = router;
