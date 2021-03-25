const jsonServer = require('json-server'); 
const server = jsonServer.create(); 
const router = jsonServer.router('db.json');
const middleLewares = json.defaults(); 
const port = process.env.PORT || 3000; 

server.use(middLewares); 
server.use(router); 

server.listen(port); 