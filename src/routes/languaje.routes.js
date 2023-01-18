import {  Router } from "express";
import { methods as Controlador }  from "../controllers/controller";

const router = Router();

router.get("/api/lenguajes", Controlador.getLenguaje);

export default router;
