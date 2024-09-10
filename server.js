require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToMongo = require('./db');
app.use(cors({origin: "*"}));
const http = require("http");
const { Server } = require("socket.io");
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

app.get("/",(req,rs)=>{
  res.json({message: "hello world"})
})

app.use("/api/v1/user",require("./router/User"));
server.listen(process.env.PORT,()=>{
    console.log("Server is connected with",process.env.PORT);
    connectToMongo();
})