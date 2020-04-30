const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3003;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'))

app.listen(port, ()=> console.log(`recipe-steps listening at http://localhost:${port}`));