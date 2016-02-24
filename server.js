var express = require("express");
var app = express();
var passport = require('passport');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var session = require('express-session');

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + '/assets'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/phaser.min.js", function(req, res) {
    res.sendFile(__dirname + "/phaser.min.js");
});

app.get("/game.js", function(req, res) {
    res.sendFile(__dirname + "/game.js");
});

app.get("/play.js", function(req, res) {
    res.sendFile(__dirname + "/play.js");
});

app.get("/menu.js", function(req, res) {
    res.sendFile(__dirname + "/menu.js");
});

app.get("/load.js", function(req, res) {
    res.sendFile(__dirname + "/load.js");
});

app.get("/assets/bird.png", function(req, res) {
    res.sendFile(__dirname + "/assets/bird.png");
});

app.get("/assets/pipe.png", function(req, res) {
    res.sendFile(__dirname + "/assets/pipe.png");
});

app.get("/assets/jump.wav", function(req, res) {
    res.sendFile(__dirname + "/assets/jump.wav");
});

app.listen(app.get("port"), function() {
    console.log("Server started: http://localhost:" + app.get("port") + "/");
});
