import express from "express";
import jogosController from "../controllers/jogosControllers.js";

const router = express.Router();

router.get("/jogos", jogosController.listar);
router.get("/jogos/:id", jogosController.buscar);
router.post("/jogos", jogosController.criar);
router.put("/jogos/:id", jogosController.atualizar);
router.delete("/jogos/:id", jogosController.remover);

export default router;