const express = require('express');
const path = require('path');
const app = express();

app.use(express.json())

const apiRouter = require('./routes/api')

//console.log(path.resolve(__dirname, '../client/index.html'))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('solo project listening on port 3000')
})