import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
let appExpress = express();
appExpress.use(express.json());


let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))