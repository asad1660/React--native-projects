const PORT= 3000;
const express = require("express");
const socketIO = require("socket.io");

const server = express().listen(PORT, () => {
    console.log(`listening to the port ${PORT}`)
})

const socketHandler = socketIO(server);

socketHandler.on("connection", () => {
    console.log("Client Connected")
})