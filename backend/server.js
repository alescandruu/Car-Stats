const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

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

app.get('/web-scraping/data', (req, res) => {
  axios.get('https://www.cursbnr.ro/curs-valutar-lira-sterlina')
    .then(response => {
      const $ = cheerio.load(response.data);
      const scrapedData = [];

      // XPath code
      const xpath = '/html/body/div[3]/div[1]/div/main/div[2]/div/div/div[3]/table/tbody/tr/td[position() <= 2][not(contains(@class, "text-right"))]';

      const nodes = $x(xpath, { document: { documentElement: $._root } });

      for (const node of nodes) {
        const date = $(node).find('td.date').text().trim();
        const value = parseFloat($(node).find('td.value').text().trim());
        scrapedData.push({ date, value });
      }

      res.json(scrapedData);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch scraped data' });
    });
});

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
