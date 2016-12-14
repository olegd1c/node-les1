// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();

app.use(express.logger());

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(request, response) {
  response.sendfile('index.html');
});

// запускаем сервер на порту 8080
//app.listen(8080);
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
// отправляем сообщение
console.log('Сервер стартовал!'); 
/*
var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World node!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/