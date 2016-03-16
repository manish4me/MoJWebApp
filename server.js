
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('angulartest', ['userdata']);

var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post('/addPerson', function(req, res){
	console.log(req.body);
	db.userdata.insert(req.body,{w:1}, function(err, docs){
		console.log(docs);
		res.json({error:false,data:docs});
	})
});

//app.use(express.static(__dirname + "/app/views"));
app.listen(3000);
console.log("server running on port 3000");