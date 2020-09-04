const express = require('express')

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.send("This works, right?");
  });
  
  
  
  
  module.exports = server;
  