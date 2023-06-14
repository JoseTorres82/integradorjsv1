const productos = [
  {
    id: 1,
    nombre: "Stanley Quencher",
    precio: 20.199,
    caracteristicas: ["Diametro: 9 cm, Altura: 23 cm, Capacidad: 591ml, Incluye tapa: Si"],
    imagen: "./assets/productos/hogar/stanley-quencher-tumbler-april-2023-642b61bd06f19.png",
    categoria: 'hogar',
    /* category:'oferta' */
  },
  {
    id: 2,
    nombre: "Vaso Termico Stanley Acero Inox Pinta ",
    precio: 12.599,
    caracteristicas: ["Diametro: 8,7 cm, Altura: 14,6 cm, Capacidad: 431ml, Incluye tapa: No"],
    imagen: "./assets/productos/hogar/stanley_pinta.jpg",
    categoria: 'hogar',

  },
  {
    id: 3,
    nombre: "Camp Mug Stanley Taza ",
    precio: 21.399,
    caracteristicas: ["Dimensiones: 29.4 × 9.5 × 9.5 cm, Capacidad: 454ml, Incluye tapa: Si"],
    imagen: "./assets/productos/hogar/stanley_campCup.jpeg",
    categoria: 'Hogar',
    category:'oferta'

  },
  {
    id: 4,
    nombre: "Set De 4 Vasos Stanley ",
    precio: 45.599,
    caracteristicas: ["Diametro: 8,7 cm, Altura: 14,6 cm, Capacidad: 431ml, Incluye tapa: No"],
    imagen: "./assets/productos/hogar/set-de-4-vasos-stanley.jpg",
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
    categoria: ' celulares',
    category:'oferta'
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
    categoria: ' celulares',
    category:'oferta'
  },
  {
    id: 9,
    nombre: "PlayStation 5 ",
    precio: 149.999,
    caracteristicas: ["Sony Playstation",
      "color blanca", "1 Joystick",
      "Juego de regalo"],
    imagen: "./assets/productos/gaming/gaming-console-mockup_47987-2870.avif",
    categoria: ' gaming',
    category:'oferta'
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
    imagen: "./assets/productos/gaming/NintendoSwitch.avif",
    categoria: 'Gaming',
  },

];

const buttonMenu = document.getElementById('button-menu');
const headerContainer = document.getElementById('header-container');
const headerTopper = document.getElementById('header-topper');

buttonMenu.addEventListener('click', () => {
  headerContainer.style.top = 0;
  headerTopper.style.display = 'none';
});

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

// Acá abajo busca y renderiza las cards debajo del hero (falta boton añadir a carrito al hacer hover)// ( Funciona Ok! - No tocar)
const cardOfertasContainer = document.getElementById('cards');
const cardOfertas = productos.filter(producto => producto.category == "oferta");
const renderCards = (producto) => {
  const card = `
  <div class="card">
  <div class="card__img">
  <img src=${producto.imagen} alt="" class="imagen-card">
  </div>
  <div class="card_text">
  <h3>${producto.nombre}</h3>
  <p>$ <span>${producto.precio}</span> </p>
  <i class="fa-brands fa-cc-visa"></i>
                    <i class="fa-brands fa-cc-mastercard"></i>
                    <i class="fa-brands fa-cc-amex"></i>
                    <p>Pagá en cuotas fijas</p>
  </div>
  <div class="card__button">
  <a href="" class="button">Comprar</a>
  </div>
  </div>
  </div>
  `;
  cardOfertasContainer.insertAdjacentHTML('afterend', card);
};
cardOfertas.forEach(renderCards);
//-----------------------------------fin

//cards de "Semana de Ofertas" (OK! no Toque nada mas acá!!)
const SemanaDeOfertas = document.getElementById('card-experiencias');
const productosRandom = productos.sort(() => Math.random() - 0.3);
const productosRandomLimit = productosRandom.slice(0, 4);
const renderCardsRandom = (producto) => {

  const cardE = `
  <div class="cardE">
  <div class="card__img">
  <img src=${producto.imagen} alt="" class="imagen-card">
  </div>
  <div class="cardE__text">
  <h3>${producto.nombre}</h3>
  <p>$ <span>${producto.precio}</span> </p>
  </div>
  <button class="cardE_Btn">Lo Quiero!</button>
  </div>
  `;
  SemanaDeOfertas.insertAdjacentHTML('afterend', cardE);
};
productosRandomLimit.forEach(renderCardsRandom);

const cardE_Btn = document.querySelectorAll('.cardE_Btn');
cardE_Btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    alert('Agregado al carrito!');
  });
});
//--------------------Fin cards Semana de ofertas

/* Buscador de productos ya funciona (JOSE NO TOQUES MAS ESTA PARTE DEL CODIGO) */
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('product-search');
const searchContainer = document.getElementById('search-container');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === 'todas') {
    renderAllProducts();
  } else {
    const matchingProducts = productos.filter((producto) => {
      const categorias = producto.categoria.toLowerCase().split(',');
      return categorias.some((categoria) => categoria.trim() === searchTerm);
    });

    if (matchingProducts.length > 0) {
      renderSearchResults(matchingProducts);
    } else {
      renderNoResults();
    }
  }
});

const renderAllProducts = () => {
  const searchResultHTML = productos
    .map((producto) => {
      return `
      <div class="search-result">
      <div class="searchCrad">
        <div><img src="${producto.imagen}" alt="" class="search-result__img"></div>
        <h3>${producto.nombre}</h3>
        <p>${producto.caracteristicas[0]}</p>
        <p>Precio: $${producto.precio}</p>
      </div>
    </div>
      `;
    })
    .join('');

  searchContainer.innerHTML = searchResultHTML;
};

const renderSearchResults = (matchingProducts) => {
  const searchResultHTML = matchingProducts
    .map((producto) => {
      return `
      <div class="search-result">
      <div class="searchCrad">
        <div><img src="${producto.imagen}" alt="" class="search-result__img"></div>
        <h3>${producto.nombre}</h3>
        <p>${producto.caracteristicas[0]}</p>
        <p>Precio: $${producto.precio}</p>
      </div>
    </div>
      `;
    })
    .join('');

  searchContainer.innerHTML = searchResultHTML;
};

const renderNoResults = () => {
  searchContainer.innerHTML = '<p>No se encontraron resultados.</p>';
};
////------------------------------------FIN BUSCA
