const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 8081;


const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.resolve(__dirname, "../../dist")));

app.get('/', function(req, res) {
    app.send(path.join(__dirname, "../../dist/index.html"));
})

app.listen(port, ()=> {
    console.log("Listening to port ", port);
})

