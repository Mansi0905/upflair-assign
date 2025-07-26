const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// In-memory product list
let products = [
  { id: 1, name: "Laptop", price: 49999, category: "Electronics" },
  { id: 2, name: "Shoes", price: 2999, category: "Footwear" },
  { id: 3, name: "Watch", price: 1999, category: "Accessories" }
];

let currentId = 4;

// GET /products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /products
app.post('/products', (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ error: 'name, price, and category are required' });
  }

  const newProduct = {
    id: currentId++,
    name,
    price: Number(price),
    category
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const { name, price, category } = req.body;
  if (name) product.name = name;
  if (price) product.price = Number(price);
  if (category) product.category = category;

  res.json(product);
});

// DELETE /products/:id
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products.splice(index, 1);
  res.json({ message: `Product with ID ${id} deleted.` });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
