import {
  getProducts,
  addProduct,
  deleteProduct,
  findProductById
} from './services/products.service.js';

import { showMenu } from './utils/helpers.js';

console.log('=== TECHLAB PRODUCTS CLI ===');

showMenu();

// Mostrar productos
console.log('\nLista de productos:');
console.table(getProducts());
// Agregar producto
addProduct({
  id: 4,
  name: 'Teclado Mecánico',
  price: 45000
});

console.log('\nProducto agregado correctamente');
console.table(getProducts());

// Buscar producto
const product = findProductById(2);

console.log('\nProducto encontrado:');
console.log(product);

// Eliminar producto
deleteProduct(1);
console.log('\nProducto eliminado');
console.table(getProducts());