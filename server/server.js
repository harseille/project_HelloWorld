const express = require('express');
const path = require('path');
const users = require('../fake-data/user');

const app = express();
const PORT = process.env.PORT || 8089;

app.use('/', express.static(path.resolve(__dirname, '..', 'client')));

app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const isSuccess = users.findUser(email, password);
  if (isSuccess) res.send({ isSuccess });
});

app.listen(PORT, () => {
  console.log(`Server listening on http:/localhost:${PORT}`);
});
