const express = require("express");
const app = express();
const path = require("path");
const baseRoot = path.resolve(__dirname);

app.use(express.static("public"));

//Inicio rutas
app.get("/", (req, res) => {
  console.log(req);
  res.sendFile(baseRoot + "/views/index.html");
});

app.get("/lovelace", (req, res) => {
  console.log(req);
  res.sendFile(baseRoot + "/views/lovelace.html");
});

app.get("/turing", (req, res) => {
  console.log(req);
  res.sendFile(baseRoot + "/views/turing.html");
});
app.get("/berners-lee", (req, res) => {
  console.log(req);
  res.sendFile(baseRoot + "/views/berners-lee.html");
});
app.get("/babbage", (req, res) => {
  console.log(req);
  res.sendFile(baseRoot + "/views/babbage.html");
});
app.get("/clarke", (req, res) => {
  console.log(req);
  res.sendFile(baseRoot + "/views/clarke.html");
});
app.get("/hamilton", (req, res) => {
  console.log(req);
  res.sendFile(baseRoot + "/views/hamilton.html");
});
app.get("/hopper", (req, res) => {
  console.log(req);
  res.sendFile(baseRoot + "/views/hopper.html");
});

//Fin rutas
app.listen(3030, () => {
  console.log("Funciona");
});

function name(...params) {}
