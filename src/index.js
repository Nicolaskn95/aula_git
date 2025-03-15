const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/test", (req, res) => {
  res.send({ message: "Endpoint de teste" });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "test123") {
    return res.status(401).send({ message: "Usuário ou senha inválidos" });
  }
  res.send({ message: "Login realizado com suceso" });
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});

module.exports = app;
