const express = require('express');
const knex = require('knex')(require('../knexfile.js')["development"]);
const bcrypt = require('bcrypt');
const { route } = require('./videoGames_inv.js');
const app = express();
const router = express.Router();

router.use(express.json());

//Account Creation 

router.post('/auth/signup', async (req, res) => {
    try {
      const { first_name, last_name, username, password } = req.body;
      //Hashing
      const hashedPassword = await bcrypt.hash(password, 10);
      //DB insertation
      const [newUser] = await knex('users')
        .insert({ first_name, last_name, username, password: hashedPassword })
        .returning('*'); 
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error: Account SignUp failed:', error);
      res.status(500).json({ error: 'Failed to create new account. Please try again.' });
    }
  });

//Login Account

router.post('/auth/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await knex('users').where({ username }).first();
      if (!user) {
        return res.status(401).json({ error: 'Credentials not found. Please try again.' });
      }
      const creds = await bcrypt.compare(password, user.password);
      if (!creds) {
        return res.status(401).json({ error: 'Credentials not found. Please try again.' });
      }
      // Successful login.
      res.json({ message: 'Login completed', user });
    } catch (error) {
      console.error('Error: Account not found:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  });

  //Users info
  router.get('/users', async (req, res) => {
    try {
      const users = await knex('users').select('*');
      const userNames = users.map(user => user.first_name);
      res.json(userNames);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });
  
  router.get('/users/:id',async(req,res)=>{
      const {id}=req.params;
      try{
          const user= await knex('users').where({id}).first();
          res.json(user);
      } catch(error){
          console.error('Error user not found',error)
          res.status(500).json({ error: 'Failed to fetch user' })
      }
      })

  module.exports = router;