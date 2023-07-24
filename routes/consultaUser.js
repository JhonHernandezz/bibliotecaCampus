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

export default storageUser;