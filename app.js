// 1. Nuestro Catálogo (Arreglo de Objetos)
const catalogoPanes = [
  {
    nombre: "Pan Salado",
    descripcion: "Crujiente por fuera, extra suave por dentro; el cómplice dorado e irresistible de todas tus comidas",
    precio: "$5.00",
    imagen: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500&q=80"
  },
  {
    nombre: "pan dulce",
    descripcion: "El apapacho perfecto para tu día; esponjoso, dulce y con ese saborcito casero que alegra el corazón.",
    precio: "$15.00",
    imagen: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&q=80"
  },
  {
    nombre: "Pasteleria",
    descripcion: "Momentos de pura felicidad hechos bizcocho; texturas tan suaves y cremosas que se derriten en tu boca.",
    precio: " desde $20.00",
    imagen: "https://images.unsplash.com/photo-1599708153386-62bf0f03099a?w=500&q=80"
  }
];

// 2. Seleccionamos el contenedor vacío del HTML
const contenedor = document.getElementById("contenedor-productos");

// 3. Función para pintar los panes en la pantalla
function renderizarProductos() {
  // Recorremos el arreglo con un forEach
  catalogoPanes.forEach(pan => {
    
    // Creamos la tarjeta usando Template Literals (comillas invertidas)
    const tarjetaHTML = `
      <div class="tarjeta-pan">
        <img src="${pan.imagen}" alt="${pan.nombre}">
        <h3>${pan.nombre}</h3>
        <p>${pan.descripcion}</p>
        <span class="precio">${pan.precio}</span>
      </div>
    `;
    
    // Inyectamos la tarjeta en el contenedor
    contenedor.innerHTML += tarjetaHTML;
  });
}

// 4. Ejecutamos la función
renderizarProductos();