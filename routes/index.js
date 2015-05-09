var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var dB = require('../db.js');


/* GET home page. */
router.get('/', function(req, res, next) {
     res.render('index', { title: 'Express' });
});

router.get('/data/search/:label', function(req, res, next) {
    var val = req.query.val,
        label = req.params.label

    var search = {}
    search[label]=val

    dB.collecData.find(search, function (err, doc){
        console.log(doc)
        res.jsonp({data : doc})
    });

});

router.post('/data/add/', function(req, res, next) {
    console.log(req.body)
    var data = JSON.parse(req.body.data);

    var obj = new dB.collecData(data)
    obj.save(function(err){
        res.jsonp({error : err})
    })

});

module.exports = router;
