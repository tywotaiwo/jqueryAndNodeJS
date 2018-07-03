var fs = require('fs');
var http = require('http');



var action = function(req, res){

    var file = function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }

  fs.readFile('index.html', file);
}

http.createServer(action).listen(8080);