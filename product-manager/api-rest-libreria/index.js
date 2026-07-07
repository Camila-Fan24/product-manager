import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import productsRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import { authentication } from "./src/middlewares/authentication.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "API REST Librería funcionando correctamente"
    });
});

// Ruta pública
app.use("/auth", authRouter);

// Rutas protegidas
app.use("/api/products", authentication, productsRouter);

// Ruta inexistente
app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});