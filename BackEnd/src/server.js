import "dotenv/config"
import express, { response } from "express"
import cors from "cors"
import path from "node:path";
import { fileURLToPath } from "node:url";

//importar conexão com banco 
import conn from './config/conn.js'

//importar modelos
import Postagem from "./models/postagensModels.js"

//importar rotas
import postagensRoutes from "./routes/postagensRoutes.js";
import usuariosRoutes from "./routes/usuariosRoutes.js"

const PORT = process.env.PORT
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log("filename:", __filename); 
console.log("dirname: ", __dirname)

//3 middlewares 
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/public",express.static(path.join(__dirname, "public")))

// conexão com o banco 
conn.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor on http://localhost:${PORT}`)
    })
}).catch()

app.use("/postagens", postagensRoutes)
app.use("/usuarios", usuariosRoutes)