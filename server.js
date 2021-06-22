const express = require('express');
const path = require('path');
const app = express()

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './client/index.html'));
})

app.listen(3000, () => {
  console.log('solo project listening on port 3000')
})