var express = require('express');
var mysql = require('mysql');
/*var pool = mysql.createPool({
  host  : '127.0.0.1',
  user  : 'student',
  password: 'default',
  database: 'student'
});*/
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs290_jazdzewj',
    password        : '4174',
    database        : 'cs290_jazdzewj'
});



var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',5505);

var content = [];
var output = {
    content: content
};

app.get('/reset-table',function(req,res,next){
    var context = {};
    pool.query("DROP TABLE IF EXISTS workouts", function(err){ 
      var createString = "CREATE TABLE workouts("+
      "id INT PRIMARY KEY AUTO_INCREMENT,"+
      "name VARCHAR(255) NOT NULL,"+
      "reps INT,"+
      "weight INT,"+
      "date DATE,"+
      "lbs BOOLEAN)";
      pool.query(createString, function(err){
          if (err){
              console.log(err);
          }
        context.results = "Table reset";
        res.render('home',context);
        content = [];
        })
    });
});

app.get('/',function(req,res,next){
    content = [];
    pool.query("SELECT * FROM `workouts`",function(err,rows){
        if (err){
            console.log(err);
            return
        }
        if (rows){
            for (var a=0;a<rows.length;a++){
                content[a] = rows[a];
            }
        }
    });
    var obj = {
            name: "sample",
            reps: 1,
            weight: 1,
            date: "1970/01/01",
            units: 1,
    }
    pool.query("INSERT INTO `workouts` (`name`,`reps`,`weight`,`date`,`lbs`) VALUES (?,?,?,?,?)",[obj.name,obj.reps,obj.weight,obj.date,obj.units],function(err,results){
        if (err){
            console.log(err);
        }
        if (results){
            console.log("Inserted "  + results.insertId);
        }
        obj.id = results.insertId;
        content.push(obj);
        output.content = content;
        res.render('home',output);
    })

});

app.get('/add',function(req,res){
    var unitVal = req.query.units;
    var dateVal = req.query.date;
    var weightVal = req.query.weight;
    var repVal = req.query.reps;
    var nameVal = req.query.name;
    if (!dateVal || !weightVal || !repVal || !nameVal){
        console.log('Cannot enter that data');
        return;
    }
    pool.query("INSERT INTO `workouts` (`name`,`reps`,`weight`,`date`,`lbs`) VALUES (?,?,?,?,?)",[nameVal,repVal,weightVal,dateVal,unitVal],function(err,results){
        if (err){
            console.log(err);
            return;
        }
        if (results){
            console.log("Inserted "  + results.insertId);
        }
    var newRow = {
            units: unitVal,
            date: dateVal,
            weight: weightVal,
            reps: repVal,
            name: nameVal,
            id: results.insertId
    }
    content.push(newRow);
    output.content = content;
    });
    res.render('home',output);
});

app.get('/save',function(req,res){
    var unitVal = req.query.units;
    var dateVal = req.query.date;
    var weightVal = req.query.weight;
    var repVal = req.query.reps;
    var nameVal = req.query.name;
    var ID1 = req.query.id;
    if (!dateVal || !weightVal || !repVal || !nameVal){
        console.log('Cannot enter that data');
        res.render('home',output);
    }
    pool.query("UPDATE `workouts` SET `name`=?,`reps`=?,`weight`=?,`date`=?,`lbs`=? WHERE id=?",[nameVal,repVal,weightVal,dateVal,unitVal,ID1],function(err,results){
        if (err){
            console.log(err);
        }
        if (results){
            console.log("Updated");
        }
    });
    if (unitVal){
        unitVal = "lbs";
    } else {
        unitVal = "kgs";
    }
    for (var a=0;a<content.length;a++){
        console.log("id= " + content[a].id + "ID1= " + ID1);
        if (content[a].id==ID1){
            content[a].name = nameVal;
            content[a].reps = repVal;
            content[a].weight = weightVal;
            content[a].date = dateVal;
            content[a].unit = unitVal;
        }
    }
    output.content = content;
    res.render('home',output);
});

app.get('/edit',function(req,res){
    var rowID = req.query.id;
    console.log("Id=" + rowID);
    pool.query("SELECT * FROM `workouts` WHERE id=?",[rowID],function(err,rows){
        if (err){
            console.log (err);
            return;
        }
        if (rows){
            
        var name = rows[0].name;
        var reps = rows[0].reps;
        var weight = rows[0].weight;
        var date = rows[0].date;
        var units = rows[0].unit;
        console.log(name + reps + weight + date);
        var form = {
            name: name,
            reps: reps,
            weight: weight,
            date: date,
            units: units,
            id: rowID
        }
    }
        res.render('edit',form);
    });
});

app.get('/delete',function(req,res){
    if (output.content.length===1){
        console.log("Cannot delete last item.");
        return;
    }
    pool.query("DELETE FROM `workouts` WHERE id=?",[req.query.id],function(err,del){
        if (err){
            console.log(err);
            return;
        }
    });
    for (var a=0;a<content.length;a++){
        if (content[a].id==req.query.id){
            content.splice(a,1);
        }
    }
    output.content = content;
    res.render('home',output);
});
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
    });