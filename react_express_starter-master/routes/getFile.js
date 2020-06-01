const express = require('express');
const router = express.Router();
let Employee = require('../model/employee');

router.get('/employees', (req, res) => {
  Employee.find({},(err,employee) => {
    if(err){
      console.log(err);
    }else {
      res.json(employee);
    }
  })
})
module.exports = router;


