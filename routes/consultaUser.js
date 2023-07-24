import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';
// import administrator from '../middleware/middlewareAdministrator.js';
// import validarId from '../middleware/validarParams.js';
// import generarTokenData from '../middleware/tokens/generarTokenData.js';

dotenv.config();
let storageUser = Router();

let con = undefined;
storageUser.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

// http://127.10.10.10:5500/user/autores/nacionalidad
storageUser.get("/autores/nacionalidad", (req, res) => {
    con.query(
        `SELECT id_autor, nombre, apellido, nacionalidad FROM autor`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/categorias
storageUser.get("/categorias", (req, res) => {
    con.query(
        `SELECT id_categoria, nombre FROM categoria`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/editoriales/direcciones
storageUser.get("/editoriales/direcciones", (req, res) => {
    con.query(
        `SELECT id_editorial, nombre, direccion, telefono FROM editorial`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/estados/descripciones
storageUser.get("/estados/descripciones", (req, res) => {
    con.query(
        `SELECT id_libro, titulo, isbn, num_paginas, nombre, descripcion FROM libro INNER JOIN estado_libro ON libro.id_estado = estado_libro.id_estado`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/titulo/autor/editorial
storageUser.get("/titulo/autor/editorial", (req, res) => {
    con.query(
        `SELECT libro.id_libro, libro.titulo, libro.isbn, libro.num_paginas, autor.id_autor, autor.nombre, autor.apellido, autor.nacionalidad, editorial.id_editorial, editorial.nombre, editorial.direccion FROM libro INNER JOIN autor ON libro.id_autor = autor.id_autor INNER JOIN editorial ON libro.id_editorial = editorial.id_editorial`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/prestamo/starDate/endDate
storageUser.get("/prestamo/starDate/endDate", (req, res) => {
    con.query(
        `SELECT id_prestamo, id_usuario, fecha_prestamo, fecha_devolucion, estado FROM prestamo`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/reserva/starDate/estado
storageUser.get("/reserva/starDate/estado", (req, res) => {
    con.query(
        `SELECT id_reserva, fecha_reserva, fecha_reserva_fin, estado, estado FROM reserva`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/disponibles/prestamo/
storageUser.get("/disponibles/prestamo", (req, res) => {
    con.query(
        `SELECT libro.id_libro, autor.id_autor, autor.nombre, autor.apellido, estado_libro.id_estado, estado_libro.nombre FROM libro INNER JOIN autor ON libro.id_autor = autor.id_autor INNER JOIN estado_libro ON libro.id_estado = estado_libro.id_estado WHERE estado_libro.id_estado = 1`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

export default storageUser;