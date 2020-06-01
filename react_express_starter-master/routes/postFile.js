const express = require('express');
const router = express.Router();
let Employee = require('../model/employee');

router.post('/add',(req,res) => {

    let employee = new Employee();
    employee.firstName = req.body.firstName;
    employee.lastName = req.body.lastName;
    employee.job = req.body.job;
    employee.salary = req.body.salary;
   
    employee.save((err) => {
      if(err){
        console.log(err);
        console.log("eroare la server- nu s-au salvat datele in db")
      }else{
        console.log("data was saved in db")
      }
    });

  });
  
module.exports = router;