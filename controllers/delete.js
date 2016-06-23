var mongoose = require('mongoose');
var employeeModel = require('../models/employee');

module.exports = function(req,res){

    var params = req.params;
    var employee_id = params["_id"];
    var arr = employee_id.split(":");
    employeeModel.findById(arr[1],function (err, model) {
        model.remove();
    });
    res.send("done");
};