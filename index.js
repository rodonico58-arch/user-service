const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Datos de usuarios en memoria
const users = [
  { id: 1, name: "taller", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Carlos", email: "carlos@example.com" },
];

// Único endpoint de consulta de usuarios
// - GET /users            => lista todos los usuarios
// - GET /users?id=1       => devuelve el usuario con id=1
app.get("/users", (req, res) => {
  const { id } = req.query;
  if (id) {
    const user = users.find((u) => String(u.id) === String(id));
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    return res.json(user);
  }
  return res.json(users);
});

//app.get("/taller", (req, res) => {
//return res.send("<h1>Taller Nico!</h1><p>Bienvenido al taller de Nico</p>");
//});

app.get("/taller", (req, res) => {
  return res.send(`
    <div style="text-align: center; font-family: sans-serif; background-color: #121212; color: #ffffff; padding: 40px; min-height: 100vh;">
      <h1 style="color: #00e5ff; margin-bottom: 10px;">¡Taller en Construcción! 🛠️</h1>
      <p style="font-size: 1.2rem; color: #b0bec5;">Estamos preparando el taller mecánico del futuro. ¡Muy pronto estaremos listos!</p>
      <div style="margin-top: 30px;">
        <img src="/watermarked_img_15370506642574234183.webp" alt="Taller mecánico del futuro" style="max-width: 800px; width: 100%; border-radius: 12px; box-shadow: 0 0 20px rgba(0,229,255,0.4);" />
      </div>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
