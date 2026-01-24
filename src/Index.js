// Instalamos el modulo "express" -> npm i express
// Instalamos el modulo "nodemon" -> npm i nodemon -D  ("-D" para que se instale en las DevDependencies del archivo package.json)

const express = require("express"); // Encargado de configurar las funcionalidades básicas del servidor.
const app = express(); // Lo inicializamos y lo guardamos en la constante "app".

app.set("port", process.env.PORT || 8080); // Fija el puerto de inicio a la variable PORT o a 8080(cambiar si otro programa lo está usando)

app.listen(app.get("port"), () => {
  console.log("hola desde el puerto " + app.get("port")); // Hace una peticin get al puerto inicial.
}); // "app.get revisa que el puerto esta funcionando y ejecuta la funcion leerPuerto()"

// // Configuramos la nueva ruta: (Para ruta inicial ponemos solo la barra "/")
// app.get("/rutaGet", function (req, res) {
//   // req : parametro para enviar info a la ruta, res : para que nos devuelva informacion esa ruta
//   console.log(
//     "hola en la consola de node, desde una interacción con el servidor",
//   ); // Muestra en consola la interacción en la web.
//   res.send("hola desde una web llamada en el servidor"); // Envia al FRONTEND
// });

// Escribiendo en el navegador "localhost:8080/rutaGet" accedemos al FRONTEND de nuestro programa.

// Para poder acceder a otro archivo al completo
app.use(require("../routes/index")); // . si routes esta dentro de la carpeta actual
// .. si hay que salir de la carpeta src para entrar en la carpeta routes.
