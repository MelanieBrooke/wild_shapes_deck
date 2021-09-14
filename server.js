const express = require('express');
const app = express();
const port = 2021;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = require('./database');
const dbindex = require('./database/index.js');

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});




app.get('/user', (req, res) => {
  // setting up some things in case I want to make it available to more characters later, but right now hardcoding since I'm just using it for myself
  dbindex.getDruidLevel('Enoki', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

app.get('/shapes', (req, res) => {
  // get current shape data
})

app.post('/shapes', (req, res) => {
  // add a new shape from the client side
})

app.patch('/shapes', (req, res) => {
  // update a beast that the druid has seen
})