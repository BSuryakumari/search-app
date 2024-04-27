const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;


const searchData = (query) => {
  return [
    { title: 'Result 1', description: 'Description for Result 1' },
    { title: 'Result 2', description: 'Description for Result 2' },
  ];
};

app.post('/api/search', (req, res) => {
  const query = req.body.query;
  const results = searchData(query);
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
