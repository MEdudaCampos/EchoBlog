import "dotenv/config"
import express, { response } from "express"
import cors from "cors"

//importar conexão com banco 
import conn from './config/conn.js'

//importar modelos
import Postagem from "./models/postagensModels.js"

//importar rotas
import postagensRoutes from "./routes/postagensRoutes.js";


const PORT = process.env.PORT
const app = express()

//3 middlewares 
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// conexão com o banco 
conn.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor on http://localhost:${PORT}`)
    })
}).catch()

app.use("/postagens", postagensRoutes)