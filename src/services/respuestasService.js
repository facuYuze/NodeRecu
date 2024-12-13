import { respuestas, preguntas } from '../db/memoryDatabase.js';

class RespuestasService {
    static crearRespuesta(respuestaData) {
        const pregunta = preguntas.find((p) => p.id === respuestaData.pregunta_id);
        if (!pregunta) return null;

        const nuevaRespuesta = {
            id: respuestas.length + 1,
            ...respuestaData,
            es_respuesta_correcta: respuestaData.respuesta_seleccionada === pregunta.respuesta_correcta,
            fecha_creacion: new Date().toISOString(),
        };

        respuestas.push(nuevaRespuesta);
        return nuevaRespuesta;
    }

    static obtenerTodasRespuestas() {
        return respuestas;
    }
}

export default RespuestasService;
