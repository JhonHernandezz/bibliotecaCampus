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

// http://127.10.10.10:5500/user/reserva/starDate/estado
storageUser.get("/disponibles/prestamo", (req, res) => {
    con.query(
        `SELECT libro.id_libro, autor.id_autor, autor.nombre, autor.apellido, estado_libro.id_estado, estado_libro.nombre FROM libro INNER JOIN autor ON libro.id_autor = autor.id_autor INNER JOIN estado_libro ON libro.id_estado = estado_libro.id_estado WHERE estado_libro.id_estado = 1`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/prestados/devolucion
storageUser.get("/prestados/devolucion", (req, res) => {
    con.query(
        `SELECT prestamo.id_prestamo, libro.id_libro, libro.titulo, prestamo.fecha_devolucion FROM libro INNER JOIN prestamo ON libro.id_libro = prestamo.id_libro`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/usuarios/email
storageUser.get("/usuarios/email", (req, res) => {
    con.query(
        `SELECT id_usuario, nombre, apellido, email FROM usuario`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/autor/Gabriel
storageUser.get("/autor/:nombre", (req, res) => {
    con.query(
        `SELECT libro.id_libro, libro.titulo, autor.id_autor, autor.nombre, autor.apellido FROM libro INNER JOIN autor ON libro.id_autor = autor.id_autor WHERE autor.nombre = ?`,
        req.params.nombre,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/categoria/Novela
storageUser.get("/categoria/:nombre", (req, res) => {
    con.query(
        `SELECT libro.id_libro, libro.titulo, categoria.id_categoria, categoria.nombre FROM libro INNER JOIN categoria ON libro.id_categoria = categoria.id_categoria WHERE categoria.nombre = ?`,
        req.params.nombre,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/prestamos/Juan
storageUser.get("/prestamos/:nombre", (req, res) => {
    con.query(
        `SELECT libro.id_libro, libro.titulo, usuario.id_usuario, usuario.nombre, usuario.apellido, prestamo.id_prestamo, prestamo.fecha_prestamo FROM libro INNER JOIN prestamo ON libro.id_libro = prestamo.id_libro INNER JOIN usuario ON prestamo.id_usuario = usuario.id_usuario WHERE usuario.nombre = ?;
        `,
        req.params.nombre,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/libros/paginas
storageUser.get("/libros/paginas", (req, res) => {
    con.query(
        `SELECT id_libro, titulo, num_paginas FROM libro WHERE num_paginas > 500`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/usuario/Ana
storageUser.get("/usuario/:nombre", (req, res) => {
    con.query(
        `SELECT libro.id_libro, libro.titulo, usuario.id_usuario, usuario.nombre, usuario.apellido FROM libro INNER JOIN prestamo ON libro.id_libro = prestamo.id_libro INNER JOIN usuario ON prestamo.id_usuario = usuario.id_usuario WHERE usuario.nombre = ?`,
        req.params.nombre,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/autores
storageUser.get("/autores", (req, res) => {
    con.query(
        `SELECT id_autor, nombre, apellido, nacionalidad FROM autor WHERE nacionalidad = "Española"`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/reservados
storageUser.get("/reservados", (req, res) => {
    con.query(
        `SELECT libro.id_libro, libro.titulo, estado_libro.id_estado, estado_libro.nombre FROM libro INNER JOIN estado_libro ON libro.id_estado = estado_libro.id_estado WHERE estado_libro.id_estado = 4`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/editorial/Novela
storageUser.get("/editorial/:nombre", (req, res) => {
    con.query(
        `SELECT libro.id_libro, libro.titulo, editorial.id_editorial, editorial.nombre FROM libro INNER JOIN editorial ON libro.id_editorial = editorial.id_editorial WHERE editorial.nombre = ?`,
        req.params.nombre,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

// http://127.10.10.10:5500/user/prestamoss/usuario
storageUser.get("/prestamoss/usuario", (req, res) => {
    con.query(
        `SELECT prestamo.id_prestamo, prestamo.fecha_prestamo, usuario.id_usuario, usuario.nombre, usuario.apellido FROM prestamo INNER JOIN usuario ON prestamo.id_usuario = usuario.id_usuario`,

        (error, data, fill) => {
            res.send(data)
        }
    )
})

export default storageUser;