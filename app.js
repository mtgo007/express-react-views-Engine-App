var express = require('express')
var app = express()
var mongojs = require('mongojs')
var db = mongojs('127.0.0.1/userapp', ['users']) 
// view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get("/", function(req, res){
    db.users.find(function (err, docs) {
        console.log(err)
        console.log(docs)
        res.render('index', {title : "Mathias 123", name:"Mathias", users:docs});
    })
    
})

app.get("/users", function(req, res){
    
});

app.listen(3000, function(){
    console.log("listening on port 3000")
})