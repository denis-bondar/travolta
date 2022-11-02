const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const hotels = require('./hotels')

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(hotels.search('Greece', 1, new Date(2022,10,1), new Date(2022, 10, 5)));
});

app.post('*', (req, res) => {
  res.json(req.body);
});

// app.post('/search', (req, res)=> {
//   var persons = Number(req.body.persons)
//   res.send(hotels.search('Greece', 1, new Date(2022,10,1), new Date(2022, 10, 5)));
// });

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});