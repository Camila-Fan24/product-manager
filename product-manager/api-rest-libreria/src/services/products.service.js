import {
    getAllProducts,
    getProductById as getProductByIdModel,
    saveProduct,
    editProduct,
    removeProduct
} from "../models/products.model.js";

// Obtener todos
export const getProducts = async () => {
    return await getAllProducts();
};

// Obtener por ID
export const getProductById = async (id) => {
    return await getProductByIdModel(id);
};

// Crear
export const createProduct = async (product) => {
    return await saveProduct(product);
};

// Actualizar
export const updateProduct = async (id, data) => {
    await editProduct(id, data);
};

// Eliminar
export const deleteProduct = async (id) => {
    await removeProduct(id);
};