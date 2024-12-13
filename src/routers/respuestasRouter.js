import { Router } from 'express';
import RespuestasController from '../controllers/respuestasController.js';

const router = Router();

router.post('/', RespuestasController.crearRespuesta);

export default router;
