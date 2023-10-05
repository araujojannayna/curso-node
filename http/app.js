var http = require("http")

console.log("Server on!")
http.createServer(function(request, response){
    response.end("<h1>Welcome!</h1>")
}).listen(8181)