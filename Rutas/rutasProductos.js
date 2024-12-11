const express = require("express");
const rutas = express.Router();
const { mostrarProductos, borrarProducto, buscarPorID, nuevoProducto } = require("../BD/productosBD");

rutas.get("/mostrarProductos", async (req, res) => {
    const productos = await mostrarProductos();
    res.json(productos);
});

rutas.get("/buscarPorId/:id", async (req, res) => {
    const producto = await buscarPorID(req.params.id);
    res.json(producto);
});

rutas.delete("/borrarProducto/:id", async (req, res) => {
    const productoBorrado = await borrarProducto(req.params.id);
    res.json(productoBorrado);
});

rutas.post("/nuevoProducto", async (req, res) => {
    const nuevo = await nuevoProducto(req.body);
    res.json(nuevo);
});

module.exports = rutas;
