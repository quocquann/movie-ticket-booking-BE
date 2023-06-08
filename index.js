import express from "express"
import cors from 'cors'
import path from 'path'
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import route from "./routes/index.js"
import * as dotenv from 'dotenv'

dotenv.config()

debugger
const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
route(app)

app.listen(PORT, () => console.log(`Server listen to posrt ${PORT}`));