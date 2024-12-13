// src/routers/preguntasRouter.js
import { Router } from 'express';
import PreguntasController from '../controllers/preguntasController.js';

const router = Router();

// Definimos las rutas
router.post('/', PreguntasController.crearPregunta);
router.put('/:id', PreguntasController.actualizarPregunta);
router.delete('/:id', PreguntasController.eliminarPregunta);
router.get('/azar', PreguntasController.obtenerPreguntaAleatoria);
router.get('/', PreguntasController.obtenerTodasPreguntas);

export default router;

