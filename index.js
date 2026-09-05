const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Datos de usuarios en memoria
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Carlos', email: 'carlos@example.com' }
];

// Único endpoint de consulta de usuarios
// - GET /users            => lista todos los usuarios
// - GET /users?id=1       => devuelve el usuario con id=1
app.get('/users', (req, res) => {
  const { id } = req.query;
  if (id) {
    const user = users.find(u => String(u.id) === String(id));
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    return res.json(user);
  }
  return res.json(users);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
