const express = require("express");
const rutas = express.Router();
const { mostrarUsuarios, nuevoUsuario, borrarUsuario, buscarPorID } = require("../BD/usuariosBD");

rutas.get("/mostrarUsuarios", async (req, res) => {
    console.log("Invocando mostrarUsuarios...");
    try {
        const usuarios = await mostrarUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});

rutas.get("/buscarPorId/:id", async (req, res) => {
    const usuario = await buscarPorID(req.params.id);
    res.json(usuario);
});

rutas.delete("/borrarUsuario/:id", async (req, res) => {
    const usuarioBorrado = await borrarUsuario(req.params.id);
    res.json(usuarioBorrado);
});

rutas.post("/nuevoUsuario", async (req, res) => {
    const nuevo = await nuevoUsuario(req.body);
    res.json(nuevo);
});

module.exports = rutas;
