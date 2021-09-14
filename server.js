const express = require('express');
const app = express();
const port = 2021;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});




app.get('/user', (req, res) => {
  // get druid level
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