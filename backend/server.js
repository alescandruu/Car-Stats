const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let data = [
  { date: '16 mai 2023', value: 5.5 },
  { date: '16 mai 2023', value: 5.5 },
  { date: '16 mai 2023', value: 5.5 }
];

app.get('/server1/data', (req, res) => {
  axios.get('http://localhost:4000/values')
  .then(response => res.json(response.data))
});

app.post('/server1/data', (req, res) => {
  axios.post('http://localhost:4000/values', req.body)
  .then(response => res.json(response.data));
});

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
