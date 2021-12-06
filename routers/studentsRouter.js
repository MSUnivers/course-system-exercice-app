const express = require("express");
const {addStudentController,getAllStudents,getStudentById}=require('../controllers/studentsController')

const router = express.Router();
router.post("/", addStudentController)

router.get("/all",getAllStudents);
router.get("/:sid",getStudentById)

module.exports = router;
