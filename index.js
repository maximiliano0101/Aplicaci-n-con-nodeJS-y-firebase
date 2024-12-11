const express=require("express");
const usuariosRutas=require("./Rutas/rutasUsuarios");
const productosRutas=require("./Rutas/rutasProductos");
const app=express();
const port=process.env.PORT || 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/usuarios", usuariosRutas);
app.use("/productos", productosRutas);
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});