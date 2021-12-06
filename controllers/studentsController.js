const StudentModel=require('../models/studentModel')
async function addStudentController (req, res,next) {
    try {
        
          const result = await StudentModel.create(req.body);
          res.status(200).send(result);
        
    } catch (error) {
          next(error);
        }
    }

   async function getAllStudents (req, res,next) {
       try {
        const studentsList=await StudentModel.find();
        res.status(200).send(studentsList);
       } catch (error) {
           next(error)
       }
    }
    async function getStudentById (req,res,next) {
        try {
            const studentById = await StudentModel.findById(req.params.sid);
            res.status(200).send(studentById);
        } catch (error) {
            next(error);
        }
     }
    module.exports = {addStudentController,getAllStudents,getStudentById}