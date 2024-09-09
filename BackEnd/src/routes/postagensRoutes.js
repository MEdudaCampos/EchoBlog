import { Router } from "express";
import { createPostagem } from "../controllers/postagensControllers.js";

const router = Router()

router.post("/", createPostagem)

export default router;