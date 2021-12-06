const express = require('express')
const app=express();
require('dotenv').config()
const logger = require('morgan');
const classRouter=require('./routers/classRouter')
const studentsRouter=require('./routers/studentsRouter')
const mongoose = require('mongoose');
/**SETUP middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
/**SETUP CONNECTION TO DB */
mongoose.connect(process.env.DB_HOST);
mongoose.connection.on("error", console.error);
mongoose.connection.once("open", () => {
  console.log("Connection to database established");
});
/**ROUTES */
app.use('/classes',classRouter)
app.use('/students',studentsRouter)
/* error handler */
app.use((req, res, next) => {
    const err = new Error('Route not defined');
    err.status = 404;

    next(err);
});

app.use((err, req, res, next) => {
    if (err) {
        res
            .status(err.status || 500)
            .json({ error: err });
    }
});
const port=process.env.PORT||5001
app.listen(port,()=>{console.log('the server is up and running on the port'+ port)})