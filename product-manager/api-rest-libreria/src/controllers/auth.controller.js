import { generateToken } from "../utils/token-generator.js";

const defaultUser = {
    id: 1,
    email: "admin@libreria.com",
    password: "123456"
};

export const login = (req, res) => {

    const { email, password } = req.body;

    if (
        email === defaultUser.email &&
        password === defaultUser.password
    ) {

        const token = generateToken(defaultUser);

        return res.json({
            mensaje: "Login correcto",
            token
        });

    }

    return res.status(401).json({
        mensaje: "Credenciales incorrectas"
    });

};