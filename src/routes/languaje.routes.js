import {  Router } from "express";
import { methods as Controlador }  from "../controllers/controller";

const router = Router();

router.get("/api/lenguajes", Controlador.getLenguaje);
router.post("/api/lenguajes", Controlador.addLenguaje);

export default router;
