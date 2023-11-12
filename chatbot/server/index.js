const express = require("express");
const app = express();
const cors = require("cors");
var bp = require('body-parser')
const { spawn } = require('child_process');
import { execSync } from 'child_process'; 

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","DELETE","PUT"],
      credentials: true,}));
  app.use(express.json());
//   app.use(bp.urlencoded({ extended: false }))
//   app.use(bp.json())

app.listen(3001, () => {
    console.log("running server");
});

app.post("/l", (req, res) => {
    const question = req.body.question;
    console.log(question)
    console.log("baack")
    res.send(question);
          })

const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync("python3 '" + question + "'", { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);
          

