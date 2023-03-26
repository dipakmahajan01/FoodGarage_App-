var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var data = {
        name: 'Raj',
        age: 20,
        gender: 'Male',
        location: 'Hyderabad'
    }
    // res.send(JSON.stringify(data));
    res.render('employeeDetails', data);
});

module.exports = router;
