
var http = require("http")
var fs = require("fs")
console.log(__dirname)
function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode ) responseCode = 200;
    fs.readFile(__dirname + path, function(err,data){
        if (err) {
            res.writeHead(500,{"Content-Type":"text/plain"});
            res.end("500 - Internal error")
        } 
        else {
            res.writeHead(responseCode, { "Content-Type" : contentType});
            res.end(data);
        }
    })
}


http.createServer(function(req,res)
{ var path = req.url.replace(/\/?(?:\?.*)?.*/,"").toLowerCase();
switch(path)
{case "":
 serveStaticFile(res,"/index.html", "text/html");
break;
case "/about":
    serveStaticFile(res,"/about.html", "text/html");
    break;
    case "/img/logo.jpg":
        serveStaticFile(res,"/img/logo.jpg", "image/jpeg");
        break;
        default:
            serveStaticFile(res, "/404.html","text/html",404 );
            break;
}
    
    
}). listen(3000)
console.log("Serving is running on port 3000. Press CTRL+C to terminate");



