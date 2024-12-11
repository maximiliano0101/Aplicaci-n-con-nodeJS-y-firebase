class Producto {
    constructor(data) {
        this.id = data.id;
        this.producto = data.producto;
        this.descripcion = data.descripcion;
        this.cantidad = data.cantidad;
        this.precio=data.precio;
    }
    set id(id) {
        this._id = id;
    }
    set producto(producto) {
            this._producto = producto;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }

    set precio(precio){
        this._precio = precio;
    }


    get id() {
        return this._id;
    }
    get producto() {
        return this._producto;
    }
    get descripcion() {
        return this._descripcion;
    }
    get cantidad() {
        return this._cantidad;
    }

    get precio(){
        return this._precio;
    }

    get getProducto() {
        const condid = {
            id: this.id,
            producto: this.producto,
            descripcion: this.descripcion,
            cantidad: this.cantidad,
            precio: this.precio
        }
        const sinid = {
            producto: this.producto,
            descripcion: this.descripcion,
            cantidad: this.cantidad,
            precio: this.precio
            }
        if (this.id == undefined) {
            return sinid;
        } else {
            return condid;
        }
    }
}

module.exports = Producto;