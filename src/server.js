import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`서버 작동중 http://localhost:5000`);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

server.listen(5000, handleListen);
