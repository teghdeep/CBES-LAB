module.exports = {
    server: function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Hello World !");
    } 
    }