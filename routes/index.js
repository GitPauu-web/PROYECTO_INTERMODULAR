const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("Alguien accedió al servidor");
  res.send("BIENVENIDO"); // Devuelve datos al usuario
});

router.get("/menuprincipal", (req, res) => {
  console.log("Alguien accedió al menu principal");
  res.send("-- MENU PRINCIPAL --");
});
router.get("/perfil", (req, res) => {
  console.log("Alguien accedió al perfil");
  res.send("-- PERFIL --");
});

router.get("/estadisticas", (req, res) => {
  console.log("Alguien accedió a las estadisticas");
  res.send("-- ESTADISTICAS --");
});

router.get("/editarPerfil", (req, res) => {
  console.log("Alguien accedió al editor de perfil");
  res.send("-- EDITAR PERFIL --");
});

router.get("/salir", (req, res) => {
  console.log("Alguien intenta salir del juego");
  res.send("-- SALIR DEL JUEGO --");
});
router.post("/holaPOST", (req, res) => {
  req.body =
    "Aqui se guardaran los datos de formularios para enviarlos a la BBDD";
  console.log("Enviada una petición post");
  res.send("hola soy la 1ª ruta POST");
});
router.post("/registro", (req, res) => {
  console.log("Nuevo usuario: ", req.body);
  res.send("Usuario registrado");
});
router.post("/login", (req, res) => {
  console.log("Datos Login: ", req.body);
  res.send("Login procesado");
});
router.post("/puntuación", (req, res) => {
  console.log("Puntuación recibida: ", req.body);
  res.send("Usuario registrado");
});
router.post("/contacto", (req, res) => {
  console.log("Mensaje de: ", req.body);
  res.send("Mensaje enviado");
});

module.exports = router;
