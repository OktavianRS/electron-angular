var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.get('/contactlist', function(req, res) {
    db.contactlist.find().sort( {name: 1}, function(err, docs) {
        res.json(docs);
    });
});

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.post('/contactlist', function(req, res){
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/contactlist:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
        res.json(doc);
    })
});

app.listen(3000);
