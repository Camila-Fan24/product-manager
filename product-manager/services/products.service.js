const BASE_URL = 'https://fakestoreapi.com/products';

// Obtener todos los productos
export const obtenerProductos = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    console.log(data);
};

// Obtener producto por ID
export const obtenerProductoPorId = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();

    console.log(data);
};

// Crear producto
export const crearProducto = async (title, price, category) => {
    const nuevoProducto = {
        title,
        price: Number(price),
        category
    };

    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
    });

    const data = await response.json();

    console.log('Producto creado:');
    console.log(data);
};

// Eliminar producto
export const eliminarProducto = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });

    const data = await response.json();

    console.log('Producto eliminado:');
    console.log(data);
};