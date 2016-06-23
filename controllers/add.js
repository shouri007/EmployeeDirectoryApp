var mongoose = require('mongoose');
var employeeModel = require('../models/employee');

module.exports = function (req,res) {
    
    var newEmployee = new employeeModel({

        name:req.body.name,
        email:req.body.email,
        dob:req.body.dob,
        department:req.body.department,
        gender:req.body.gender,
        age:req.body.age
    });
    
    newEmployee.save();
    res.send("done");
};