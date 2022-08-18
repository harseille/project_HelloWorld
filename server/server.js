const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', express.static(path.resolve(__dirname, '..', 'client')));

app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http:/localhost:${PORT}`);
});
