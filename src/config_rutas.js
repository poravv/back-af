const express = require('express');
const rutas = express()

const ciudad = require('./servicios/ciudad')
const cliente = require('./servicios/cliente')
const sucursal = require('./servicios/sucursal')
const persona = require('./servicios/persona')
const usuario = require('./servicios/usuario');
const proveedor = require('./servicios/proveedor');
const producto = require('./servicios/producto');
const producto_final = require('./servicios/producto_final');
const inventario = require('./servicios/inventario');
const detinventario = require('./servicios/detinventario');
const venta = require('./servicios/venta');
const detventa = require('./servicios/detventa');
const receta = require('./servicios/receta');
const preg_seguridad = require('./servicios/preg_seguridad');

rutas.use('/af/api/ciudad',ciudad);
rutas.use('/af/api/cliente',cliente);
rutas.use('/af/api/sucursal',sucursal);
rutas.use('/af/api/persona',persona)
rutas.use('/af/api/usuario',usuario)
rutas.use('/af/api/proveedor',proveedor)
rutas.use('/af/api/producto',producto)
rutas.use('/af/api/producto_final',producto_final)
rutas.use('/af/api/inventario',inventario)
rutas.use('/af/api/detinventario',detinventario)
rutas.use('/af/api/venta',venta)
rutas.use('/af/api/receta',receta)
rutas.use('/af/api/detventa',detventa)
rutas.use('/af/api/pregseguridad',preg_seguridad)

module.exports = rutas;