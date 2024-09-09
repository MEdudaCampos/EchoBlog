import { Router } from "express";
import { createUsuario } from "../controllers/usuariosControllers.js";

const router = Router()

router.post("/registros", createUsuario)

export default router;