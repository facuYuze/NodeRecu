// index.js
import express from 'express';
import cors from 'cors';
import preguntasRouter from './src/routers/preguntasRouter.js'; 
import respuestasRouter from './src/routers/respuestasRouter.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/preguntas', preguntasRouter);
app.use('/respuestas', respuestasRouter);

app.get('/', (req, res) => {
    res.send('API en memoria funcionando!');
});

app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
