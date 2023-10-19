// server.js
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;



let nums = new Set();
let text = [];
let powerNum = Math.floor(Math.random() * 26) + 1;
while(nums.size !== 5) {
  nums.add(Math.floor(Math.random() * 100) + 1);
}
console.log(nums);

const iter = nums.entries();
for (const entry of iter) {
  text.push(entry);
}


//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    for (i = 0; i < 5; i++)
    {
        res.write("White Ball " + (i+1).toString() + ": " + text[i][0].toString());
        res.write("<br>")
    }
    res.write ("Powerball: " + powerNum.toString());
    res.end("<h1>Powerball!</h1>");

    });
//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
})


