const http = require('http');
const PORT = 3000;

function onRequest(req, res) {
    res.writeHead(200, {"Content-Type": "application/json"})
    const dataJson = {
        name : "Chondro",
        participant: "SYNRGY Academy",
        live:"Banyuwangi"
        
    }
    res.end(JSON.stringify(dataJson));
}

http.createServer(onRequest).listen(PORT, ()=>{
    console.log("Server Running");
});