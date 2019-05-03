const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')
const bodyParser = require('body-parser');
let mountain = [];


app.use(cors());
app.use(bodyParser.json());


app.get('/', (req,res) => res.json(mountain));

app.post('/', (req,res) => {
  mountain.push(req.body);
  console.log(req.body);
  res.json(mountain);
})

// const server = http.createServer((request, response) => { 
//     // return response.end(dogs);
    
//     if (request.url === "/dogs") {
//       if (request.method === "GET") {
//         response.end(JSON.stringify(dogs));
//       } else if (request.method === "POST") {
//         let body = [];
//         request.on('data', chunk => {
//           body.push(chunk);
//         });
//         request.on('end', () => {
//           dogs.push(JSON.parse(body));
//           response.end(JSON.stringify(dogs));
//         })
        
//       } else {
//         // others... (PUT, DELETE, etc...)
//       } 
//     } else {
//       // any other route...
//     }
//   });

app.listen(PORT, () => console.log("Server is listening on port %s", PORT));