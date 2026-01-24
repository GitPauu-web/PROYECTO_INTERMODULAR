const { Router } = require("express"); //
const router = Router();

router.get("/", (req, res) => {
  console.log("Alguien accedió al servidor");
  res.send("BIENVENIDO");
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

module.exports = router;
