const express = require('express');
const knex = require('knex')(require('../knexfile.js')["development"]);
const app = express();
const router = express.Router();      

router.use(express.json());

function truncateDescription(description, maxLength = 100) {
  return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
}

//New item
router.post('/items', async (req, res) => {
    try {
     
      const { user_id, item_name, description, quantity } = req.body;
      const [newItem] = await knex('items')
        .insert({ user_id, item_name, description, quantity })
        .returning('*');
      
      res.status(201).json(newItem);
    } catch (error) {
      console.error('Error creating item:', error);
      res.status(500).json({ error: 'Failed to create item' });
    }
  });
  //Get all items. 
  router.get('/items', async (req, res) => {
    try {
      let items = await knex('items').select('*');
      
      items = items.map(item => ({
        ...item,
        description: truncateDescription(item.description)
      }));
      res.json(items);
    } catch (error) {
      console.error('Error fetching Items:', error);
      res.status(500).json({ error: 'Failed to fetch Items' });
    }
  });

  //Get description

  router.get('/items/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const item = await knex('items').where({ id }).first();
      if (!item) {
        return res.status(404).json({ error: 'Not found' });
      }
      res.json(item);
    } catch (error) {
      console.error('Error fetching Item:', error);
      res.status(500).json({ error: 'Failed to fetch Item' });
    }
  });

  //Edit Item
  router.put('/items/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { item_name, description, quantity } = req.body;
     
      const [updatedItem] = await knex('items')
        .where({ id })
        .update({ item_name, description, quantity, updated_at: knex.fn.now() })
        .returning('*');
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found or update failed' });
      }
      res.json(updatedItem);
    } catch (error) {
      console.error('Error updating item:', error);
      res.status(500).json({ error: 'Failed to update item' });
    }
  });
  

  //Delete Item
  router.delete('/items/:id', async (req, res) => {
    try {
      const { id } = req.params;
      
      const deletedCount = await knex('items').where({ id }).del();
      if (!deletedCount) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json({ message: 'Item deleted' });
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Unable to delete item' });
    }
  });

  //Manager's inventory

  router.get('/users/:id/items', async (req, res) => {
    try {
      const { id } = req.params;
      const items = await knex('items').where({ user_id: id }).select('*');
      res.json(items);
    } catch (error) {
      console.error('Error fetching user items:', error);
      res.status(500).json({ error: 'Failed to fetch items for user' });
    }
  });

  //User's inventory
  router.get('/users/:id/items', async (req, res) => {
    try {
      const { id } = req.params;
      let items = await knex('items').where({ user_id: id }).select('*');
      items = items.map(item => ({
        ...item,
        description: truncateDescription(item.description)
      }));
      res.json(items);
    } catch (error) {
      console.error('Error fetching user items:', error);
      res.status(500).json({ error: 'Failed to fetch items for user' });
    }
  });

  module.exports = router;