const productos = [
  {
    id: 1,
    nombre: "Stanley Quencher",
    precio: 20.199,
    caracteristicas: ["Diametro: 9 cm, Altura: 23 cm, Capacidad: 591ml, Incluye tapa: Si"],
    imagen: "./assets/productos/hogar/stanley-quencher-tumbler-april-2023-642b61bd06f19.png",
    categoria: 'oferta',
  },
  {
    id: 2,
    nombre: "Vaso Termico Stanley Acero Inox Pinta ",
    precio: 12.500,
    caracteristicas: ["Diametro: 8,7 cm, Altura: 14,6 cm, Capacidad: 431ml, Incluye tapa: No"],
    imagen: "./assets/productos/hogar/stanley_pinta.jpg",
    categoria: 'hogar',

  },
  {
    id: 3,
    nombre: "Camp Mug Stanley Taza ",
    precio: 21.300,
    caracteristicas: ["Dimensiones: 29.4 × 9.5 × 9.5 cm, Capacidad: 454ml, Incluye tapa: Si"],
    imagen: "./assets/productos/hogar/stanley_pinta.jpg",
    categoria: 'Hogar, oferta',

  },
  {
    id: 4,
    nombre: "Set De 4 Vasos Stanley ",
    precio: 45.500,
    caracteristicas: ["Diametro: 8,7 cm, Altura: 14,6 cm, Capacidad: 431ml, Incluye tapa: No"],
    imagen: "./assets/productos/hogar/stanley_pinta.jpg",
    categoria: 'Hogar',
  },
  {
    id: 5,
    nombre: "Termo TERMO • ACERO INOXIDABLE 2,3 LITROS ",
    precio: 51.199,
    caracteristicas: ["Diametro: 11,9 cm, Capacidad: 2.3lts, Incluye tapa: Si"],
    imagen: "./assets/productos/hogar/termo-stanley-780x405.png",
    categoria: 'Hogar',
  },
  {
    id: 6,
    nombre: "Samsung Galaxy S22U",
    precio: 560.199,
    caracteristicas: ["Memoria Interna: 256Gb",
      "Memoria Ram: 12Gb",
      "Camara Principal: 108 Mpx",
      "Camara frontal: 40 Mpx",
      "Pantalla: 163.3mm x 77.9mm x 8,9mm",
      "DualSim: Si",
      "Con NFC / Huella:Si"],
    imagen: "./assets/productos/Celulares/s22Ultra.jpg",
    categoria: 'oferta',
  },
  {
    id: 7,
    nombre: "Motorola G42 Pink",
    precio: 89.999,
    caracteristicas: ["Memoria Interna: 128Gb",
      "Memoria Ram: 4Gb",
      "Camara Principal: 50 Mpx",
      "Camara frontal: 16 Mpx",
      "Pantalla: 160.61 mm x 73.47 mm x 8.26 mm ",
      "DualSim: Si",
      "Con NFC / Huella:Si"],
    imagen: "./assets/productos/Celulares/motoG42Pink.jpg",
    categoria: 'Celulares',
  },
  {
    id: 8,
    nombre: "Moto G22 cosmic Black",
    precio: 69.999,
    caracteristicas: ["Memoria Interna: 128Gb",
      "Memoria Ram: 4Gb",
      "Camara Principal: 50 Mpx",
      "Camara frontal: 16 Mpx",
      "Pantalla:163.95 mm x 74.94 mm x 8.49 mm",
      "DualSim: Si",
      "Con NFC / Huella:Si"],
    imagen: "./assets/productos/Celulares/MotoG22.jpg",
    categoria: 'oferta',
  },
  {
    id: 9,
    nombre: "PlayStation 5 ",
    precio: 149.999,
    caracteristicas: ["Sony Playstation",
      "color blanca", "1 Joystick",
      "Juego de regalo"],
    imagen: "./assets/productos/gaming/gaming-console-mockup_47987-2870.avif",
    categoria: 'oferta',
  },
  {
    id: 10,
    nombre: "Nintendo Switch",
    precio: 259.999,
    caracteristicas: ["Memoria Interna: 32Gb",
      "Memoria Ram: 4Gb",
      "Tipo de consola: Hibrida",
      "Tipo de alimentación: Baterias",
      "Resolución:1920px X 1080px",
      "Wifi: Si",
      "Incluye Joysticks: 2"],
    imagen: "./assets/productos//gaming/Nintendo-Switch-PNG-Background.png",
    categoria: 'Gaming',
  },

];
//Menú de navegacion aca debajo (NO TOQUES NADA! MENU OK!)
const toggleButton = document.getElementById('button-menu');
const navWrapper = document.getElementById('nav-list');
const closeMenu = document.getElementById('button-menu');

toggleButton.addEventListener('click', () => {
  navWrapper.classList.toggle('show');
  navWrapper.classList.toggle('close');

  if (navWrapper.classList.contains('show')) {
    navWrapper.classList.add('close');
    closeMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>Cerrar</button>';
  } else {
    navWrapper.classList.remove('close');
    toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i>Menú</button>';
  }
  navWrapper.addEventListener('click', (e) => {
    if (e.target.nodeName == 'A') {
      navWrapper.classList.remove('show');
      navWrapper.classList.add('close');
      closeMenu.innerHTML = '<i class="fa-solid fa-bars"></i>Menú</button>';
    }
  });
});
//------------------------FIN MENU--♪♪♫♫

// Acá abajo busca y renderiza las cards debajo del hero (falta boton añadir a carrito al hacer hover)
const cardOfertasContainer = document.getElementById('cards');
const cardOfertas = productos.filter(producto => producto.categoria ==="oferta");
const renderCards = (producto) => {
  const card = `
  <div class="card">
  <img src=${producto.imagen} alt="" class="imagen-card">
  <div class="card_text">
  <h3>${producto.nombre}</h3>
  <p>$ <span>${producto.precio}</span> </p>
  <i class="fa-brands fa-cc-visa"></i>
                    <i class="fa-brands fa-cc-mastercard"></i>
                    <i class="fa-brands fa-cc-amex"></i>
                    <p>Pagá en cuotas fijas</p>
  </div>
  </div>
  `;
  cardOfertasContainer.insertAdjacentHTML('afterend', card);
  };
  cardOfertas.forEach(renderCards);
//-----------------------------------fin 

// aca agregue las cards en el DOM( Funciona Ok! - No tocar)
 const promoGaming = document.getElementsByClassName('gaming-content');
 const rendPromGame = productos.find(producto => producto.nombre === "switch");
 const renderPromGame = (producto) => {
  const card = `
  <div class="cardGaming">
  <img src=${producto.imagen} alt="" class="imagen-card">
  <div class="card_text">
  <h3>${producto.nombre}</h3>
  <p>$ <span>${producto.precio}</span> </p>
  <i class="fa-brands fa-cc-visa"></i>
  <i class="fa-brands fa-cc-mastercard"></i>
  <i class="fa-brands fa-cc-amex"></i>
  <p>Pagá en cuotas fijas</p>
  </div>
  </div>
  
  `;
  promoGaming.insertAdjacentHTML('Beforerend', card);
  };
  rendPromGame.forEach(renderPromGame);
  //-----------------------------------fin cards
