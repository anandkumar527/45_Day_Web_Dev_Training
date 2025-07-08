import express, { Router } from 'express';
import router from './routers/user.route.js';
import 'dotenv/config'
import './database/conn.js';
import bodyParser from 'body-parser';
const app = express();

const port = process.env.PORT;
//
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
//


app.use("/user", router)

app.listen(port, () => console.log(port));