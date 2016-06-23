/**
 * Created by Shouri on 15/06/16.
 */
var employeeModel = require('../models/employee');
var viewModel = {
    employees: []
};

module.exports = {
    
    mainPage: function (req, res) {
        res.render('home',viewModel);
    },

    employeesData: function (req, res) {
        employeeModel.find({},{},{},function(err,employees){
            if(err)
                throw  err;
            viewModel.employees = employees;
            res.json(employees);
        });
    }
};