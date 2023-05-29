const productos = [
    {
      id: 1,
      nombre: "Stanley Quencher",
      precio: 20.000,
      caracteristicas: ["Diametro: 9 cm, Altura: 23 cm, Capacidad: 591ml, Incluye tapa: Si"],
      imagen: "./assets/productos/hogar/stanley-quencher-tumbler-april-2023-642b61bd06f19.png",
      categoria: 'hogar',
      category:'oferta',
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
      precio: 51.200,
      caracteristicas: ["Diametro: 11,9 cm, Capacidad: 2.3lts, Incluye tapa: Si"],
      imagen: "./assets/productos/hogar/termo-stanley-780x405.png",
      categoria: 'Hogar',
      },
      { 
      id: 6,
      nombre: "Samsung Galaxy S22 Ultra",
      precio: 560.000,
      caracteristicas: ["Memoria Interna: 256Gb",
                       "Memoria Ram: 12Gb",
                       "Camara Principal: 108 Mpx",
                       "Camara frontal: 40 Mpx",
                       "Pantalla: 163.3mm x 77.9mm x 8,9mm",
                       "DualSim: Si",
                       "Con NFC / Huella:Si"],
      imagen: "./assets/productos/Celulares/s22Ultra.jpg",
      categoria: 'Celulares',
      category:'oferta',
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
      categoria: 'Celulares',
      category:'oferta',
      },
      { 
      id: 9,
      nombre: "PlayStation 5 ",
      precio: 149.999,
      caracteristicas: ["Memoria Interna: 128Gb",
                       "Memoria Ram: 4Gb",
                       "Camara Principal: 50 Mpx",
                       "Camara frontal: 16 Mpx",
                       "Pantalla:163.95 mm x 74.94 mm x 8.49 mm",
                       "DualSim: Si",
                       "Con NFC / Huella:Si"],
      imagen: "./assets/productos/Celulares/MotoG22.jpg",
      categoria: 'Gaming',
      category:'oferta',
      },
      { 
      id: 10,
      nombre: "Nintendo Switch",
      precio: 179.999,
      caracteristicas: ["Memoria Interna: 128Gb",
                       "Memoria Ram: 4Gb",
                       "Camara Principal: 50 Mpx",
                       "Camara frontal: 16 Mpx",
                       "Pantalla:163.95 mm x 74.94 mm x 8.49 mm",
                       "DualSim: Si",
                       "Con NFC / Huella:Si"],
      imagen: "./assets/productos/Celulares/MotoG22.jpg",
      categoria: 'Gaming',
      },
      
  ];
  
  const ofertas = document.getElementsByClassName('card-experiencias');
  const productosOferta = productos.filter(producto => producto.category == "oferta");
  console.log(productosOferta);
  

  //Menú de navegacion aca debajo
  const toggleButton = document.getElementById('button-menu');
  const navWrapper = document.getElementById('nav-list');
  const closeMenu = document.getElementById('button-menu');

  toggleButton.addEventListener('click',()=> {
    navWrapper.classList.toggle('show');
    navWrapper.classList.toggle('close');
    /* closeMenu.innerHTML = 'X';  */
     
  });

  navWrapper.addEventListener('click', e=>{ 
  if (e.toggle.id === 'nav-list'){
    navWrapper.classList.toggle('close'),
    toggleButton.classList.remove('show');
  
  };
  });
