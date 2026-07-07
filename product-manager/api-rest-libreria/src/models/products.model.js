import { db } from "../data/data.js";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";

const productsCollection = collection(db, "products");

// Obtener todos los productos
export const getAllProducts = async () => {
    const snapshot = await getDocs(productsCollection);

    return snapshot.docs.map((product) => ({
        id: product.id,
        ...product.data()
    }));
};

// Obtener un producto por ID
export const getProductById = async (id) => {

    const product = await getDoc(doc(db, "products", id));

    if (!product.exists()) {
        return null;
    }

    return {
        id: product.id,
        ...product.data()
    };
};

// Crear producto
export const saveProduct = async (product) => {
    const docRef = await addDoc(productsCollection, product);
    return docRef.id;
};

// Actualizar producto
export const editProduct = async (id, data) => {
    await updateDoc(doc(db, "products", id), data);
};

// Eliminar producto
export const removeProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
};