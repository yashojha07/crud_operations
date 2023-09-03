const express = require('express');
const bodyParser = require('body-parser');

const RouterUser = require('./routers/users.js');

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //act as a middleware
app.use("/user",RouterUser);

app.listen(PORT,console.log(`The server is running at localhost/${PORT}`));