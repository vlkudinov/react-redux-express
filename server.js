const express = require('express');
const path = require('path');
const cors = require ('cors');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, './app/build')));

app.get('/tickets', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.sendFile(path.resolve(__dirname,  'tickets.json'));
});

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './app/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node dev server listening on port ${PORT}`);
});
