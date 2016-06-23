var mongoose = require('mongoose');
var employeeModel = require('../models/employee');

module.exports = function (req, res) {
    
    var params = req.params;
    var employee_id = params["_id"];
    var arr = employee_id.split(":");
    console.log(arr[1]);
    console.log(req.body["department"]);

    employeeModel.findOne({_id:arr[1]},function(err,model){
        console.log("heaya");
        if(err)
            throw err;
        else{
            console.log("No error");
            model["name"]=req.body["name"],
            model["email"]=req.body["email"],
            model["email"]=req.body["email"],
            model["dob"]=req.body["dob"],
            model["department"]=req.body["department"],
            model["gender"]=req.body["gender"],
            model["age"]=req.body["age"]
            model.save();
        }
    })
    res.send("done");
};