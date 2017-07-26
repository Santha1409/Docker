var express = require('express');
var app = express();



app.use(express.static(__dirname+"/"));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
   console.log(__dirname);
   //res.sendFile("./src/index.html");
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log(server);
   console.log(host, port);
   console.log("Example app listening at http://%s:%s", host, port)

})
