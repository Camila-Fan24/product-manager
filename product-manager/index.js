import {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    eliminarProducto
} from './services/products.service.js';

import { mostrarMenu } from './utils/helpers.js';

const [, , metodo, ruta, ...args] = process.argv;

mostrarMenu();

try {

    // GET products
    if (metodo === 'GET' && ruta === 'products') {
        await obtenerProductos();
    }

    // GET products/5
    else if (metodo === 'GET' && ruta.startsWith('products/')) {

        const id = ruta.split('/')[1];

        await obtenerProductoPorId(id);
    }

    // POST products titulo precio categoria
    else if (metodo === 'POST' && ruta === 'products') {

        const [title, price, category] = args;

        await crearProducto(title, price, category);
    }

    // DELETE products/7
    else if (metodo === 'DELETE' && ruta.startsWith('products/')) {

        const id = ruta.split('/')[1];

        await eliminarProducto(id);
    }

    else {
        console.log('Comando inválido');
    }

} catch (error) {

    console.log('Error:', error.message);

}