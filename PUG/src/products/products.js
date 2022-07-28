const products = [
  {
    "name": "Escuadra",
    "price": 123.45,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    "name": "Calculadora",
    "price": 234.56,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    "name": "Globo Terráqueo",
    "price": 345.67,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  }
]
let id = 1;

const list = () => {
  return products;
};

const findOne = (id) => {
  return products.find((product) => product.id === id) || { error: 'No se encontro el producto'};
};

const add = (product) => {
  const prod = {
    id: id,
    name: product.name,
    price: product.price,
    thumbnail: product.thumbnail
  }
  products.push(prod)
  id++
  return (product || {error: 'No se pudo cargar el producto'});
};


const remove = (id) => {
  const product = findOne(parseInt(id))
    if ((product.id == id) && (product.id != null)) {
      products.splice(products.indexOf(product), 1)
    return 'Producto Eliminado';}
    else{ 
      return 'No se encontro el producto'
    }
  
};

const update = (id, newContent) => {
  const product = findOne(id);
  if ((product.id == id) && (product.id != null)) {
    product.name = newContent.name
    product.price = newContent.price
    product.thumbnail = newContent.thumbnail
    return product
  } else {
    return 'Producto no encontrado'
  }
};

module.exports = { add, list, findOne, remove, update };

