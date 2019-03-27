const BnetStrategy = requrie('passport-bnet').Strategy;
//create environment variables for below
// const BNET_ID = process.env.BNET_ID; 
// const BNET_SECRET = process.env.BNET_SECRET

const parser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
const port = 3000;

app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../static/')));

app.listen(port, () => {
  console.log('connected to port ', port);
});