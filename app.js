import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
let appExpress = express();
appExpress.use(express.json());

import storageUser from './routes/consultaUser.js';

// Generar Token y validar Tokens de inicio ------------------------------
import generarToken from './middleware/tokens/generarToken.js';
import validarToken from './middleware/tokens/validarToken.js';

appExpress.use("/generarToken/:id/:nombre", generarToken)
// -----------------------------------------------------------------------

appExpress.use("/user", validarToken, storageUser)

let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))