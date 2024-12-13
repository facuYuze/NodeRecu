import PreguntasService from '../services/preguntasService.js'; 

class PreguntasController {
    static async crearPregunta(req, res) {
        try {
            const preguntaData = req.body;
            const nuevaPregunta = PreguntasService.crearPregunta(preguntaData);
            res.status(201).json(nuevaPregunta);
        } catch (error) {
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    }

    static async actualizarPregunta(req, res) {
        const id = parseInt(req.params.id, 10);
        const preguntaActualizada = PreguntasService.actualizarPregunta(id, req.body);

        if (!preguntaActualizada) {
            return res.status(404).json({ mensaje: 'Pregunta no encontrada' });
        }
        res.status(200).json(preguntaActualizada);
    }

    static async eliminarPregunta(req, res) {
        const id = parseInt(req.params.id, 10);
        const preguntaEliminada = PreguntasService.eliminarPregunta(id);

        if (!preguntaEliminada) {
            return res.status(404).json({ mensaje: 'Pregunta no encontrada' });
        }
        res.status(200).json(preguntaEliminada);
    }

    static async obtenerPreguntaAleatoria(req, res) {
        const pregunta = PreguntasService.obtenerPreguntaAleatoria();
        if (!pregunta) {
            return res.status(404).json({ mensaje: 'No hay preguntas disponibles' });
        }
        res.status(200).json(pregunta);
    }

    static async obtenerTodasPreguntas(req, res) {
        try {
            const { filtro, orden } = req.query;  
            const preguntas = await PreguntasService.obtenerTodasPreguntas(filtro, orden);
            res.status(200).json(preguntas);
        } catch (error) {
            console.error('Error al obtener preguntas:', error);
            return res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    }
}

export default PreguntasController;
