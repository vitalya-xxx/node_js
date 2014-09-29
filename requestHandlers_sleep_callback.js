var myResponse;

function sleep(milliSeconds, callback) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
    callback();
}	

function start(response) {
  myResponse = response;  
  console.log("Request handler 'start' was called.");
  sleep(10000, helloStart);
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

function helloStart(){
    myResponse.writeHead(200, {"Content-Type": "text/plain"});
    myResponse.write('Hello start!');
    myResponse.end();
}

exports.start = start;
exports.upload = upload;

