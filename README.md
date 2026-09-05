# Users API

API simple en Node.js y Express que expone un único endpoint de consulta de usuarios.

Instalación:

```bash
npm install
```

Ejecutar:

```bash
npm start
# o para desarrollo (requiere nodemon)
npm run dev
```

Endpoints:

- `GET /users` — devuelve la lista completa de usuarios (JSON).
- `GET /users?id=<id>` — devuelve un único usuario por `id`.

Ejemplo con curl:

```bash
# listar usuarios
curl http://localhost:3000/users

# obtener usuario con id=1
curl http://localhost:3000/users?id=1
```
