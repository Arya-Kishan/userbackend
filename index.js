const express = require("express")

const obj = { name: "arya", age: 23, graduation: "BCA" }
const server = express()

server.use("/get", (req, res) => {
    res.send(JSON.stringify(obj))
})

server.use("/", (req, res) => {
    res.send("arya")
})

server.listen("8080", () => {
    console.log("server listened");
})