const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const xpath = require('xpath');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/server1/data', (req, res) => {
  axios
    .get('http://localhost:4000/values')
    .then((response) => res.json(response.data))
    .catch(() => res.status(500).json({ error: 'Failed to get data' }));
});

app.post('/server1/data', (req, res) => {
  try {
    const { date, value } = req.body;

    if (date === '' || value === '') throw new Error('Bad request');

    axios
      .post('http://localhost:4000/values', req.body)
      .then((response) => res.json(response.data))
      .catch(() => res.status(500).json({ error: 'Failed to add data' }));
  } catch (error) {
    if (error.message === 'Bad request') {
      res.status(400).send(error.message);
    }
  }
});

app.delete('/server1/data/:date', (req, res) => {
  const { date } = req.params;
  axios
    .get('http://localhost:4000/values')
    .then((response) => {
      const dataToDelete = response.data.filter((item) => item.date === date);

      if (dataToDelete.length === 0) throw new Error('Bad request');

      dataToDelete.map((item) => axios.delete(`http://localhost:4000/values/${item.id}`));
    })
    .then(() => res.json({ message: 'Data deleted successfully' }))
    .catch((error) => {
      if (error.message === 'Bad request') {
        res.status(400).send(`${error.message}`);
        return;
      }
      res.status(500).send('Error deleting data');
    });
});

app.get('/web-scraping/data', (req, res) => {
  axios.get('https://ro.wikipedia.org/wiki/Lista_celor_mai_rapide_ma%C8%99ini_de_serie')
  .then((response) => {
    const { document } = new JSDOM(response.data).window;
    const select = xpath.useNamespaces({ 'html': 'http://www.w3.org/1999/xhtml' });

    const xpathExpression = "//html:table[1]/html:tbody/html:tr/html:td[position() = 2 or position() = 3]";
    const nodes = select(xpathExpression, document);

    const data = [];
    let count = 0;

    for (let i = 0; i < nodes.length; i += 2) {
      const marcaModelNode = nodes[i];
      const vitezaMaximaNode = nodes[i + 1];
      const marcaModel = marcaModelNode.textContent.trim();
      const vitezaMaxima = vitezaMaximaNode.textContent.split(' ')[0];

      if (marcaModel && vitezaMaxima) {
        data.push({ marcaModel, vitezaMaxima });
      }
    }

    const responseJson = {
      data: data.slice(0, 3) // Redu tabelul la primele 3 elemente
    };
    
    res.json(responseJson.data);
  })
  .catch((error) => {
    res.status(500).send('Error deleting data');
  });
});

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
