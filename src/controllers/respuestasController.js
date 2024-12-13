import RespuestasService from '../services/respuestasService.js';

class RespuestasController {
    static async crearRespuesta(req, res) {
        const nuevaRespuesta = RespuestasService.crearRespuesta(req.body);
        if (!nuevaRespuesta) {
            return res.status(404).json({ mensaje: 'Pregunta no encontrada' });
        }
        res.status(201).json(nuevaRespuesta);
    }
}

export default RespuestasController;
