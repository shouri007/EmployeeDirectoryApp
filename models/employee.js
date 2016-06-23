var mongoose = require('mongoose');
var schema = mongoose.Schema;

var employeeSchema = new schema({

    name: {type:String},
    email: {type:String},
    dob: {type:Date},
    department: {type:String},
    gender: {type:String},
    age: {type: Number}
});

module.exports = mongoose.model('employee',employeeSchema);