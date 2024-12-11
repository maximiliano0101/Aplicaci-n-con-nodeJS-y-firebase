const admin = require("firebase-admin");
const keys = require("../keys.json");

try {
    admin.initializeApp({
        credential: admin.credential.cert(keys)
    });

    const proyecto = admin.firestore();
    const usuarios = proyecto.collection("usuario");
    const productos = proyecto.collection("producto"); // Cambié "prodcutos" por "productos"

    console.log("Conexión a Firebase exitosa.");
    module.exports = {
        usuarios,
        productos
    };
} catch (error) {
    console.error("Error al conectar con Firebase:", error);
}
