const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let data = [
  { date: '16 mai 2023', value: 5.5 },
  { date: '16 mai 2023', value: 5.5 },
  { date: '16 mai 2023', value: 5.5 }
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.post('/api/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.json(data);
});

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
