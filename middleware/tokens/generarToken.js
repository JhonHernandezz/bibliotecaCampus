import {SignJWT} from 'jose';
import dotenv from 'dotenv';

dotenv.config();

const generarToken = async(req, res, next) => {
    let json = {
        id: req.params.id,
        nombre: req.params.nombre
    }

    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({json}); 
    const jwt = await jwtconstructor
    .setProtectedHeader({alg: "HS256", typ: "JWT"})
    .setIssuedAt()
    .setExpirationTime("10h")
    .sign(encoder.encode(process.env.MY_JWT));

    next();
    res.send(jwt)
}

export default generarToken;