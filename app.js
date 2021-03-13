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

http.createServer(function(req, res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch(path){
        case "":
           serveStaticFile(res,"/index.html", "text/html");
           break;
        case "/about":
            serveStaticFile(res,"/about.html", "text/html");
           break;
case "/img/cry.jpg":
    serveStaticFile(res,"/img/cry.jpg", "image/jpeg");
   break;
case "/img/welcome.jpg":
    serveStaticFile(res,"/img/welcome.jpg", "image/jpeg");
   break;
case "/img/about.jpg":
    serveStaticFile(res,"/img/about.jpg", "image/jpeg");
   break;
case "/style.css":
    serveStaticFile(res,"/style.css", "text/css");
   break;
case "/img/gallery/graduation.jpg":
    serveStaticFile(res,"/img/gallery/graduation.jpg", "image/jpeg");
   break;
case "/img/gallery/study.jpg":
    serveStaticFile(res,"/img/gallery/study.jpg", "image/jpeg");
   break;
case "/video/students/memes.mp4":
    serveStaticFile(res, "/video/students/memes.mp4", "video/mp4");
    break;
default:
    serveStaticFile(res, "error.html", "text/html", 404);
    break;

}
}).listen(3000)
console.log("Serving is running on port 3000. Press CTRL+C to terminate");






