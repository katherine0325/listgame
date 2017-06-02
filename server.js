var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 8124);

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
})

//404页面
app.use(function(req, res, next) {
	res.send('404');
})

app.listen(app.get('port'), function() {
	console.log('http://localhost:' + app.get('port'))
})
