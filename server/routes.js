var express = require('express');
var router = express.Router();
var home = require('../controllers/home');
var add = require('../controllers/add');
var update = require('../controllers/update');
var del = require('../controllers/delete');

module.exports = function(app){

    router.get('/',home.mainPage);
    router.post('/employee',add);
    router.get('/employees',home.employeesData);
    router.delete('/delete/:_id',del);
    router.put('/update/:_id',update);
    app.use(router);
};


