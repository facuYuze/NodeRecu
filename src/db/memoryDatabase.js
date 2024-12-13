
const preguntas = [
    {
        id: 1,
        pregunta: "¿Cuál es la capital de Francia?",
        opcion1: "Madrid",
        opcion2: "Berlín",
        opcion3: "París",
        opcion4: "Lisboa",
        respuesta_correcta: 3,
        fecha_creacion: "2024-12-12T10:00:00.000Z",
    },
    {
        id: 2,
        pregunta: "¿Cuántos continentes hay en el mundo?",
        opcion1: "5",
        opcion2: "6",
        opcion3: "7",
        opcion4: "8",
        respuesta_correcta: 3,
        fecha_creacion: "2024-12-11T12:30:00.000Z",
    },
    {
        id: 3,
        pregunta: "¿Cuál es el lenguaje de programación usado para el desarrollo web en el lado del cliente?",
        opcion1: "Python",
        opcion2: "JavaScript",
        opcion3: "Java",
        opcion4: "C#",
        respuesta_correcta: 2,
        fecha_creacion: "2024-12-10T14:15:00.000Z",
    },
    {
        id: 4,
        pregunta: "¿Qué planeta es conocido como el planeta rojo?",
        opcion1: "Venus",
        opcion2: "Marte",
        opcion3: "Júpiter",
        opcion4: "Saturno",
        respuesta_correcta: 2,
        fecha_creacion: "2024-12-09T16:45:00.000Z",
    },
    {
        id: 5,
        pregunta: "¿Quién pintó la Mona Lisa?",
        opcion1: "Vincent van Gogh",
        opcion2: "Pablo Picasso",
        opcion3: "Leonardo da Vinci",
        opcion4: "Claude Monet",
        respuesta_correcta: 3,
        fecha_creacion: "2024-12-08T18:00:00.000Z",
    },
];

const respuestas = [
    {
        id: 1,
        user_id: 101,
        pregunta_id: 1,
        respuesta_seleccionada: 3,
        es_respuesta_correcta: true,
        fecha_creacion: "2024-12-12T11:00:00.000Z",
    },
    {
        id: 2,
        user_id: 102,
        pregunta_id: 2,
        respuesta_seleccionada: 2,
        es_respuesta_correcta: false,
        fecha_creacion: "2024-12-11T13:00:00.000Z",
    },
    {
        id: 3,
        user_id: 103,
        pregunta_id: 3,
        respuesta_seleccionada: 2,
        es_respuesta_correcta: true,
        fecha_creacion: "2024-12-10T15:00:00.000Z",
    },
];

export { preguntas, respuestas };
