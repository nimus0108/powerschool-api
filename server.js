var scrape = require("./scrape.js");

var express = require('express');
var bodyParser = require('body-parser');
var Nightmare = require('nightmare');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

var nightmare = Nightmare({ show: true })
    .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36");

var url = 'https://ps01.bergen.org/public/#sign-in-content';

router.get('/', function(req, res) {
	res.json({ message: 'dlwlrma' });
});

router.post('/', function(req,res) {
	var username = req.body.username;
    var password = req.body.password;
    var result = scrape.scrape(username, password);
    result.then(function (grades) {
        console.log(grades);
        res.send(result);
    });
    // console.log(result);
    // res.send(result);
});


app.use('/api', router);

app.listen(port);
console.log("Port: " + port);