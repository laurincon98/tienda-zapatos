// Número de WhatsApp (incluye código de país, sin el +, sin espacios ni guiones)
const numeroWhatsapp = "57XXXXXXXXXX"; // <-- CAMBIA ESTO POR TU NÚMERO

// Cargar productos desde el archivo JSON
fetch('data/products.json')
  .then(response => response.json())
  .then(productos => {
    const contenedor = document.getElementById('contenedor-productos');

    productos.forEach(producto => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'tarjeta';

      const mensaje = encodeURIComponent(
        `Hola, estoy interesado en el producto: ${producto.nombre} (Precio: $${producto.precio.toLocaleString('es-CO')})`
      );

      tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="tarjeta-info">
          <h2>${producto.nombre}</h2>
          <p>${producto.descripcion}</p>
          <div class="precio">$${producto.precio.toLocaleString('es-CO')}</div>
          <a class="btn-whatsapp" href="https://wa.me/${numeroWhatsapp}?text=${mensaje}" target="_blank">
            Más información / Comprar
          </a>
        </div>
      `;

      contenedor.appendChild(tarjeta);
    });
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });
