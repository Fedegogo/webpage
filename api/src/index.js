const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
let dataBase = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: '*/*' }));
app.use(cors());

app.get('/hello', (req, res) => {
  const data = {
    value: dataBase
  };
  res.send(JSON.stringify(data));
});

app.post('/hello', (req, res) => {
  console.log(req.body);
  dataBase.push(req.body);
  res.send(JSON.stringify('dato recibido'));
});

app.listen(port, () => {
  console.log(`I listen on http://localhost:${port}`);
});
