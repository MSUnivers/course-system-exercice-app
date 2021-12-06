const ClassModel=require('../models/classModel')
const { validationResult } = require('express-validator');


   async function addClassController (req, res,next) {
    try {
        
          const result = await ClassModel.create(req.body);
          res.status(200).send(result);
        
    } catch (error) {
          next(error);
        }
    }

   async function getAllClasses (req, res,next) {
       try {
           const allClasses = await ClassModel.find()
           res.status(200).send(allClasses);
       } catch (error) {
           next(error);
       }
    }
    async function getClassById (req,res,next) {
       try {
           const classById = await ClassModel.findById(req.params.cid);
           res.status(200).send(classById);
       } catch (error) {
           next(error);
       }
    }
    module.exports = {addClassController,getAllClasses,getClassById}