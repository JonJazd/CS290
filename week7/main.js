var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',1505);

app.get('/',function(req,res){
    res.render('home.handlebars');
});

app.get('/getRequest',function(req,res){
    let para = [];
    let content = {};
    for (var a in req.query){
        para.push({'name':a,'value':req.query[a]});
    }
    content.data = para;
    content.request = "GET";
    res.render('getRequest',content);
});

app.post('/getRequest',function(req,res){
    let para = [];
    for (var b in req.body){
        para.push({'name':b,'value':req.body[b]});
    }
    let content = {};
    content.data = para;
    content.request = "POST";
    res.render('getRequest',content);
})

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
  
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
});
  
app.listen(app.get('port'), function(){
console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});