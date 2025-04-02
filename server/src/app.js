const express = require('express');
const app = express();
const port = 8011;
const cors = require('cors');
const knex = require('knex')(require('../knexfile.js').development);

app.use(cors());
app.use(express.json());


const userAuthRoutes = require('./user_Auth.js');
const inventoryRoutes = require('./videoGames_inv.js');


app.use(userAuthRoutes);
app.use(inventoryRoutes);


app.get('/', (req, res) => {
  res.send('API is running');
});




app.listen(port, () => {
  console.log(`Knex and Express are green on port ${port}`);
});
