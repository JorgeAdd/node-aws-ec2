const express = require('express')

const db_model = require('./db_model')

const app = express()
const port = 3001

app.get('/', (req, res) => {
    console.log("hee")
    db_model.getHomeworks()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})