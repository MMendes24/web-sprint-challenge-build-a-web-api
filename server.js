const express = require("express")

const server = express()
const actionsRouter = require("./actions/actionsRouter")
const projectsRouter = require("./projects/projectsRouter")

server.use(express.json())

server.use("/api/actions", actionsRouter)
server.use("/api/projects", projectsRouter)

server.get("/", (req, res) => {
    res.send("This works, right?");
  });
  
  
  
  module.exports = server;
  