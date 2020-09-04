const express = require("express")

const server = express()
const actionsRouter = require("./actions/actionsRouter")

server.use(express.json())

server.use("/api/actions", actionsRouter)

server.get("/", (req, res) => {
    res.send("This works, right?");
  });
  
  
  
  
  module.exports = server;
  