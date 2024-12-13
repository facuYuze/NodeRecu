// src/services/preguntasService.js
import { preguntas } from '../db/memoryDatabase.js';

class PreguntasService {
    static crearPregunta(preguntaData) {
        const nuevaPregunta = {
            id: preguntas.length + 1,
            ...preguntaData,
            fecha_creacion: new Date().toISOString(),
        };
        preguntas.push(nuevaPregunta);
        return nuevaPregunta;
    }

    static actualizarPregunta(id, preguntaData) {
        const preguntaIndex = preguntas.findIndex((p) => p.id === id);
        if (preguntaIndex === -1) return null;

        preguntas[preguntaIndex] = {
            ...preguntas[preguntaIndex],
            ...preguntaData,
        };
        return preguntas[preguntaIndex];
    }

    static eliminarPregunta(id) {
        const preguntaIndex = preguntas.findIndex((p) => p.id === id);
        if (preguntaIndex === -1) return null;

        return preguntas.splice(preguntaIndex, 1)[0];
    }

    static obtenerPreguntaAleatoria() {
        if (preguntas.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * preguntas.length);
        return preguntas[randomIndex];
    }

    static obtenerTodasPreguntas(filtro = '', orden = 'fecha_creacion') {
        let resultados = preguntas;

        // Filtrado por palabra clave en la pregunta
        if (filtro) {
            resultados = resultados.filter((p) =>
                p.pregunta.toLowerCase().includes(filtro.toLowerCase()) // Comparar de manera insensible a mayúsculas/minúsculas
            );
        }

        // Ordenamiento por fecha de creación (ascendente o descendente)
        if (orden === 'asc') {
            resultados = resultados.sort(
                (a, b) => new Date(a.fecha_creacion) - new Date(b.fecha_creacion) // Ordenar de forma ascendente por fecha
            );
        } else if (orden === 'desc') {
            resultados = resultados.sort(
                (a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion) // Ordenar de forma descendente por fecha
            );
        }

        return resultados;  // Devuelve las preguntas filtradas y ordenadas
    }

    static obtenerPreguntaPorId(id) {
        return preguntas.find((p) => p.id === id) || null;
    }
}

export default PreguntasService;
