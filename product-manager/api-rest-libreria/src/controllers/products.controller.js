import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../services/products.service.js";

// Obtener todos
export const getAllProducts = async (req, res) => {

    try {

        const products = await getProducts();

        res.json(products);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

// Obtener uno
export const getOneProduct = async (req, res) => {

    try {

        const product = await getProductById(req.params.id);

        if (!product) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json(product);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

// Crear
export const createNewProduct = async (req, res) => {

    try {

        const id = await createProduct(req.body);

        res.status(201).json({
            mensaje: "Producto creado",
            id
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

// Actualizar
export const editOneProduct = async (req, res) => {

    try {

        await updateProduct(req.params.id, req.body);

        res.json({
            mensaje: "Producto actualizado"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

// Eliminar
export const removeOneProduct = async (req, res) => {

    try {

        await deleteProduct(req.params.id);

        res.json({
            mensaje: "Producto eliminado"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};