const express =require('express');
const app = express();
const port = 8011;
const knex = require('knex')(require('../knexfile.js')["development"]);
app.get('/', (req,res)=>{
    res.send('App is up and running')

})

app.listen(port, ()=> {
    console.log('Knex and Express are green')
})

app.get('/users', (req,res)=>{
    knex('users') 
    .select('*')
    .then(users => {
      const userNames = users.map(user => user.first_name);
      res.json(userNames);
    })

} )