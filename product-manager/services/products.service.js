let products = [
  {
    id: 1,
    name: 'Notebook Lenovo',
    price: 950000
  },
  {
    id: 2,
    name: 'Mouse Gamer',
    price: 25000
  },
  {
    id: 3,
    name: 'Monitor Samsung',
    price: 320000
  }
];

export const getProducts = () => {
  return products;
};

export const addProduct = (product) => {
  products.push(product);
};

export const findProductById = (id) => {
  return products.find(product => product.id === id);
};

export const deleteProduct = (id) => {
  products = products.filter(product => product.id !== id);
};