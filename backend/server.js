import express from 'express';
import cors from 'cors';
import db from './database.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Get all items
app.get('/api/items', (req, res) => {
  try {
    const items = db.prepare('SELECT * FROM items ORDER BY created_at DESC').all();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single item by id
app.get('/api/items/:id', (req, res) => {
  try {
    const item = db.prepare('SELECT * FROM items WHERE id = ?').get(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new item
app.post('/api/items', (req, res) => {
  try {
    const { title, description, price, category, location, image_url } = req.body;
    
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const result = db.prepare(
      'INSERT INTO items (title, description, price, category, location, image_url) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(title, description, price, category, location, image_url);

    const newItem = db.prepare('SELECT * FROM items WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update item
app.put('/api/items/:id', (req, res) => {
  try {
    const { title, description, price, category, location, image_url } = req.body;
    
    const result = db.prepare(
      'UPDATE items SET title = ?, description = ?, price = ?, category = ?, location = ?, image_url = ? WHERE id = ?'
    ).run(title, description, price, category, location, image_url, req.params.id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const updatedItem = db.prepare('SELECT * FROM items WHERE id = ?').get(req.params.id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete item
app.delete('/api/items/:id', (req, res) => {
  try {
    const result = db.prepare('DELETE FROM items WHERE id = ?').run(req.params.id);
    
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
