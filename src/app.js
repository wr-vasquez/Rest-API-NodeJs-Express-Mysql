import express from 'express'
import morgan from 'morgan';
const cors = require("cors");

//Routes
import languajeRoutes from './routes/languaje.routes'

const app = express();

//Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// app.get("/", (req,res) => {
//     res.json("Bienvenidos")
// })

//Rutas
app.use(languajeRoutes);

export default app;