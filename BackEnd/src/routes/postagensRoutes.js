import { Router } from "express";
import { createPostagem, getPostagems } from "../controllers/postagensControllers.js";
import  imageUplod  from "../helpers/imagemUploadZod.js"

const router = Router()

router.post("/", imageUplod.single("imagem"), createPostagem)
router.get("/", getPostagems)

export default router;