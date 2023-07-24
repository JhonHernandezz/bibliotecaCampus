import {jwtVerify} from 'jose';
import dotenv from 'dotenv';

dotenv.config();

const validatToken = async(req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization) return res.status(401).send({token: "Error en el token."});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(authorization, encoder.encode(process.env.MY_JWT))
        next();

    } catch (error) {
        res.status(400).send({token: "Este token no existe, por favor genere uno nuevo."})
    }
}

export default validatToken;