const express = requir("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
