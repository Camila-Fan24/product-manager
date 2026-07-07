import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            mensaje: "Token no enviado"
        });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET_KEY, (error, decoded) => {

        if (error) {
            return res.status(403).json({
                mensaje: "Token inválido"
            });
        }

        req.user = decoded;

        next();

    });

};