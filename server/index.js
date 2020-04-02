const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/:endpoint', express.static(__dirname + '/../client/dist'));
app.listen(port, () => `Server listening on port ${port}`);
