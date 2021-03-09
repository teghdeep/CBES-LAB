var parser = require('ua-parser-js');
var fs = require('fs');

function renderHTML(path,response){
    fs.readFile(path,null,function(error,data){
        if(error){
            response.writeHead(404);
            response.write('File not found!!');
        }else {
            response.write(data);
        }
        response.end();
    });
}


module.exports = {
    handleRequest: function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});

        var userAgent = parser(request.headers['user-agent']);
        switch(userAgent.browser.name){
            case "Chrome":
                renderHTML('./chrome.html', response);
                break;
            case 'Firefox':
                renderHTML('./firefox.html', response);
                break;
            default:
                renderHTML('./otherbrowser.html', response);
                break;
        }
    }
};