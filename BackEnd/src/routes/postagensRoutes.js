import { Router } from "express";
import { createPostagem, getPostagems } from "../controllers/postagensControllers.js";

const router = Router()

router.post("/", createPostagem)
router.get("/", getPostagems)

export default router;