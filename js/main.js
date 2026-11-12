const products = [
  {id:'colombia-26',name:'Colombia · Tricolor',subtitle:'Fútbol · Concepto de afición',category:'futbol',price:89900,color:'#f6cf35',mark:'#263523',band:'#1e3d8a',number:'10',tag:'SELECCIONES',pattern:'pattern-colombia'},
  {id:'guayos-futbol',name:'Guayos de fútbol Volt',subtitle:'Calzado deportivo · Campo de césped',category:'futbol',extraCategories:['calzado'],price:189900,color:'#c6f052',mark:'#202a25',band:'#ff7048',number:'',tag:'CALZADO',image:'assets/images/football-cleats.jpg',imageAlt:'Guayo deportivo verde sobre césped durante un entrenamiento',photoCredit:'Muhammed Ali Önem · Pexels',photoUrl:'https://www.pexels.com/photo/close-up-of-football-boots-on-grass-field-32962876/',description:'Referencia visual de calzado con taches para jugar fútbol en césped. Producto y precio de muestra.'},
  {id:'brasil-26',name:'Brasil · Jogo',subtitle:'Fútbol · Concepto de afición',category:'futbol',price:89900,color:'#f6d83b',mark:'#17643c',band:'#187345',number:'10',tag:'SELECCIONES',pattern:'pattern-brasil'},
  {id:'argentina-26',name:'Argentina · Celeste',subtitle:'Fútbol · Concepto de afición',category:'futbol',price:89900,color:'#73c8e8',mark:'#254552',band:'#f4eee1',number:'10',tag:'SELECCIONES',pattern:'pattern-argentina'},
  {id:'mexico-26',name:'México · Verde',subtitle:'Fútbol · Concepto de afición',category:'futbol',price:89900,color:'#176c48',mark:'#f1eee1',band:'#d9413e',number:'10',tag:'SELECCIONES',pattern:'pattern-mexico'},
  {id:'cabo-verde-26',name:'Cabo Verde · Atlántico',subtitle:'Fútbol · Concepto de afición',category:'futbol',price:89900,color:'#176fa1',mark:'#fff',band:'#ee343d',number:'10',tag:'SELECCIONES',pattern:'pattern-caboverde'},
  {id:'baloncesto-noche',name:'Aro nocturno',subtitle:'Baloncesto · Camiseta de juego',category:'baloncesto',price:76900,color:'#222b3d',mark:'#f3eee0',band:'#ff7048',number:'23',tag:'BALONCESTO'},
  {id:'beisbol-turno',name:'Turno al bate',subtitle:'Béisbol · Camiseta deportiva',category:'beisbol',price:78900,color:'#f3eee0',mark:'#193d68',band:'#d6323e',number:'09',tag:'BÉISBOL'},
  {id:'natacion-linea',name:'Línea de agua',subtitle:'Natación · Camiseta de entrenamiento',category:'natacion',price:64900,color:'#1978a5',mark:'#f4f5e9',band:'#cbf45b',number:'CJ',tag:'NATACIÓN'},
  {id:'atletismo-pista',name:'Pista libre',subtitle:'Atletismo · Camiseta de entrenamiento',category:'atletismo',price:62900,color:'#202722',mark:'#cbf45b',band:'#ff7048',number:'04',tag:'ATLETISMO'},
  {id:'voleibol-punto',name:'Punto arriba',subtitle:'Voleibol · Camiseta de juego',category:'voleibol',price:69900,color:'#e8e4d9',mark:'#202a25',band:'#ff7048',number:'07',tag:'VOLEIBOL'},
  {id:'tenis-rally',name:'Rally abierto',subtitle:'Tenis · Camiseta deportiva',category:'tenis',price:68900,color:'#c6e562',mark:'#1d2a20',band:'#f3eee0',number:'05',tag:'TENIS'},
  {id:'tenis-deportivos',name:'Tenis Court Motion',subtitle:'Calzado deportivo · Tenis de cancha',category:'tenis',extraCategories:['calzado'],price:179900,color:'#e8e8df',mark:'#1d2a20',band:'#cbf45b',number:'',tag:'CALZADO',image:'assets/images/tennis-shoes.jpg',imageAlt:'Tenis blancos para jugar sobre una cancha de arcilla',photoCredit:'cottonbro studio · Pexels',photoUrl:'https://www.pexels.com/photo/person-standing-by-basket-with-balls-at-tennis-court-5741049/',description:'Referencia visual de calzado de cancha junto a pelotas de tenis. Producto y precio de muestra.'},
  {id:'tenis-court',name:'Kit de tenis',subtitle:'Accesorios · Calzado y raqueta',category:'accesorios',price:139900,color:'#e8e8df',mark:'#1d2a20',band:'#cbf45b',number:'CJ',tag:'ACCESORIOS',image:'assets/images/tennis-accessories.jpg',imageAlt:'Tenis deportivos, raqueta y pelota sobre una cancha de arcilla',photoCredit:'Rachel Brooks · Pexels',photoUrl:'https://www.pexels.com/photo/trendy-tennis-aesthetic-with-fashion-accessories-32564811/',description:'Fotografía de referencia de accesorios de tenis. El contenido y precio del producto son de muestra.'},
  {id:'medias-cancha',name:'Medias de juego',subtitle:'Medias deportivas · Caña alta',category:'accesorios',price:24900,color:'#222b3d',mark:'#f3eee0',band:'#ff7048',number:'01',tag:'ACCESORIOS',pattern:'product-socks'},
  {id:'balon-neo',name:'Balón Neo Control',subtitle:'Balón de fútbol · Diseño moderno',category:'accesorios',price:82900,color:'#f3eee0',mark:'#202a25',band:'#202a25',number:'',tag:'BALÓN FÚTBOL',pattern:'product-ball soccerball',image:'assets/images/ball-football.jpg',imageAlt:'Balón de fútbol fotografiado sobre césped',photoCredit:'Hasnain Ali · Pexels',photoUrl:'https://www.pexels.com/photo/soccer-ball-on-green-field-close-up-37234016/',description:'Fotografía de referencia de un balón en el campo. Diseño y precio de muestra.'},
  {id:'balon-prisma',name:'Balón Prisma Match',subtitle:'Balón de fútbol · Estilo multicolor',category:'accesorios',price:87900,color:'#e8eee0',mark:'#202a25',band:'#202a25',number:'',tag:'BALÓN FÚTBOL',pattern:'product-ball soccerball prisma',description:'Diseño de muestra con paneles gráficos en varios tonos. El material y el uso recomendado deben confirmarse en un producto real.'},
  {id:'balon-street',name:'Balón Street Volt',subtitle:'Balón de fútbol · Juego recreativo',category:'accesorios',price:73900,color:'#c6f052',mark:'#202a25',band:'#202a25',number:'',tag:'BALÓN FÚTBOL',pattern:'product-ball soccerball street',description:'Concepto urbano para partidos recreativos y sesiones de juego.'},
  {id:'balon-baloncesto',name:'Balón de baloncesto',subtitle:'Balón · Cancha cubierta',category:'accesorios',price:84900,color:'#e87a35',mark:'#31251e',band:'#31251e',number:'',tag:'BALONES',pattern:'product-ball basketball'},
  {id:'paintball-marcadora',name:'Marcadora tipo pistola',subtitle:'Paintball · Equipo deportivo',category:'paintball',price:219900,color:'#252b28',mark:'#cbf45b',band:'#ff7048',number:'CJ',tag:'PAINTBALL',pattern:'product-marker',description:'Marcadora recreativa para uso supervisado en un campo habilitado. Se utiliza con máscara y siguiendo las reglas de seguridad y edad del lugar.'},
  {id:'paintball-mascara',name:'Máscara protectora',subtitle:'Paintball · Protección facial',category:'paintball',price:114900,color:'#222b25',mark:'#cbf45b',band:'#cbf45b',number:'',tag:'PROTECCIÓN',pattern:'product-mask',description:'Accesorio de protección para paintball. El equipo debe cubrir ojos y rostro y cumplir las reglas de seguridad del campo.'},
  {id:'paintball-chaleco',name:'Chaleco acolchado',subtitle:'Paintball · Protección deportiva',category:'paintball',price:99900,color:'#303b34',mark:'#cbf45b',band:'#ff7048',number:'CJ',tag:'PROTECCIÓN',pattern:'product-vest',description:'Prenda acolchada conceptual para actividades recreativas de paintball.'},
  {id:'paintball-pods',name:'Portacargadores',subtitle:'Paintball · Accesorio de juego',category:'paintball',price:57900,color:'#29352d',mark:'#cbf45b',band:'#cbf45b',number:'',tag:'ACCESORIOS',pattern:'product-pods',description:'Cinturón de muestra para llevar tubos de pintura durante una partida.'}
];

const spacePhotos = {
  futbol: [{src:'assets/images/futbol-match.jpg',alt:'Futbolistas jugando en una cancha durante un partido',credit:'Mateo Franciosi · Pexels',url:'https://www.pexels.com/photo/dynamic-soccer-match-action-on-stadium-field-39876175/'}],
  baloncesto: [{src:'assets/images/basketball-court.jpg',alt:'Balón sobre una cancha interior de baloncesto azul',credit:'Reinis Brūzītis · Pexels',url:'https://www.pexels.com/photo/basketball-on-blue-indoor-court-with-wood-flooring-34688571/'}],
  beisbol: [{src:'assets/images/beisbol-campo.jpg',alt:'Campo de béisbol al aire libre con dugouts',credit:'Keith Cassill · Pexels',url:'https://www.pexels.com/photo/empty-baseball-field-on-a-clear-day-37007746/'}],
  natacion: [{src:'assets/images/piscina.jpg',alt:'Piscina vacía con carriles y agua azul',credit:'SHVETS production · Pexels',url:'https://www.pexels.com/photo/a-swimming-pool-with-clear-water-8028674/'}],
  atletismo: [{src:'assets/images/atletismo-pista.jpg',alt:'Pista de atletismo y graderías vistas desde arriba',credit:'Tomas Anunziata · Pexels',url:'https://www.pexels.com/photo/modern-runner-stadium-with-empty-seats-411990/'}],
  voleibol: [{src:'assets/images/voleibol-cancha.jpg',alt:'Partido de voleibol en una cancha cubierta',credit:'Daniil Kondrashin · Pexels',url:'https://www.pexels.com/photo/volleyball-players-in-action-on-indoor-court-32681156/'}],
  tenis: [
    {src:'assets/images/tennis-aerial.jpg',alt:'Cancha azul de tenis y graderías desde la tribuna',credit:'Nightingale · Pexels',url:'https://www.pexels.com/photo/empty-blue-tennis-court-at-melbourne-s-kia-arena-30011221/'},
    {src:'assets/images/tennis-drone.jpg',alt:'Vista aérea de un estadio de tenis vacío',credit:'Luis Flores · Pexels',url:'https://www.pexels.com/photo/tennis-court-on-stadium-15397232/'},
    {src:'assets/images/tennis-outdoor.jpg',alt:'Cancha exterior de tenis con árboles, asientos e iluminación',credit:'Ceren Büşra Sevtekin · Pexels',url:'https://www.pexels.com/photo/outdoor-tennis-court-with-seating-and-lights-35564300/'}
  ],
  paintball: [{src:'assets/images/paintball-campo.jpg',alt:'Campo de paintball con obstáculos inflables de colores',credit:'Amar Preciado · Pexels',url:'https://www.pexels.com/photo/obstacles-on-a-paintball-playing-field-15449209/'}]
};
const categoryNames = {futbol:'FÚTBOL',baloncesto:'BALONCESTO',beisbol:'BÉISBOL',natacion:'NATACIÓN',atletismo:'ATLETISMO',voleibol:'VOLEIBOL',tenis:'TENIS',calzado:'CALZADO',paintball:'PAINTBALL',accesorios:'ACCESORIOS'};

const spaces = [
  {id:'futbol',name:'Cancha de fútbol',group:'cancha',location:'CANCHA ABIERTA',description:'Vista del campo, líneas de juego y áreas de meta.',art:'<svg viewBox="0 0 800 480" aria-hidden="true"><rect x="40" y="35" width="720" height="410" rx="5" fill="#347849"/><path d="M40 35h720v410H40zM400 35v410M40 240h720" fill="none" stroke="#e7edd5" stroke-width="5"/><circle cx="400" cy="240" r="68" fill="none" stroke="#e7edd5" stroke-width="5"/><circle cx="400" cy="240" r="5" fill="#e7edd5"/><path d="M40 145h105v190H40m720-190H655v190h105M40 185h48v110H40m720-110h-48v110h48" fill="none" stroke="#e7edd5" stroke-width="5"/><path d="M120 35v410M205 35v410M290 35v410M510 35v410M595 35v410M680 35v410" stroke="#ffffff10" stroke-width="36"/></svg>'},
  {id:'baloncesto',name:'Cancha de baloncesto',group:'cancha',location:'COLISEO',description:'Tableros, zona de tiro y círculo central desde arriba.',art:'<svg viewBox="0 0 800 480" aria-hidden="true"><rect x="35" y="35" width="730" height="410" rx="8" fill="#a86c3e"/><path d="M35 35h730v410H35zM400 35v410M400 145a95 95 0 1 0 0 190a95 95 0 1 0 0-190M35 115h145v250H35m730-250H620v250h145M35 165h70v150H35m730-150h-70v150h70" fill="none" stroke="#f3e8d2" stroke-width="5"/><path d="M35 205a70 70 0 0 1 0 70M765 205a70 70 0 0 0 0 70" fill="none" stroke="#f3e8d2" stroke-width="5"/><circle cx="180" cy="240" r="9" fill="#ff7048"/><circle cx="620" cy="240" r="9" fill="#ff7048"/></svg>'},
  {id:'beisbol',name:'Campo de béisbol',group:'cancha',location:'CAMPO ABIERTO',description:'Diamante, bases y jardines en una vista general.',art:'<svg viewBox="0 0 800 480" aria-hidden="true"><rect x="35" y="35" width="730" height="410" rx="6" fill="#39764a"/><path d="M400 390 215 205 400 55 585 205z" fill="#b78555" stroke="#e9e2cc" stroke-width="5"/><path d="M400 390 215 205M400 390 585 205M215 205 400 55M585 205 400 55" fill="none" stroke="#f4ead7" stroke-width="5"/><path d="M400 343 458 285 400 227 342 285z" fill="#f4ead7"/><circle cx="400" cy="285" r="43" fill="#b78555" stroke="#f3e8d2" stroke-width="4"/><circle cx="400" cy="285" r="6" fill="#f3e8d2"/><path d="M80 260a320 255 0 0 1 640 0" fill="none" stroke="#dfead5" stroke-width="5"/></svg>'},
  {id:'natacion',name:'Piscina de natación',group:'pista',location:'CENTRO ACUÁTICO',description:'Carriles de piscina con bloques de salida y pasillo lateral.',art:'<svg viewBox="0 0 800 480" aria-hidden="true"><rect x="55" y="50" width="690" height="380" rx="22" fill="#1d7597"/><path d="M80 125h640M80 202h640M80 279h640M80 356h640" stroke="#b5e8e9" stroke-width="6"/><path d="M130 50v380M670 50v380" stroke="#ffffff25" stroke-width="6"/><path d="M80 91h640M80 390h640" stroke="#f4eee0" stroke-width="10" stroke-dasharray="18 9"/><g fill="#ff7048"><rect x="92" y="93" width="28" height="23" rx="3"/><rect x="92" y="170" width="28" height="23" rx="3"/><rect x="92" y="247" width="28" height="23" rx="3"/><rect x="92" y="324" width="28" height="23" rx="3"/></g></svg>'},
  {id:'atletismo',name:'Pista de atletismo',group:'pista',location:'PISTA 400',description:'Óvalo de carreras y campo interior en una vista aérea.',art:'<svg viewBox="0 0 800 480" aria-hidden="true"><rect x="35" y="35" width="730" height="410" rx="10" fill="#bb503c"/><rect x="90" y="85" width="620" height="310" rx="155" fill="none" stroke="#f2dfc8" stroke-width="5"/><rect x="112" y="105" width="576" height="270" rx="135" fill="none" stroke="#f2dfc8" stroke-width="4"/><rect x="134" y="125" width="532" height="230" rx="115" fill="none" stroke="#f2dfc8" stroke-width="4"/><rect x="156" y="145" width="488" height="190" rx="95" fill="none" stroke="#f2dfc8" stroke-width="4"/><rect x="214" y="175" width="372" height="130" rx="5" fill="#36784b"/><path d="M214 240h372M400 175v130" stroke="#cfe0bb" stroke-width="3"/></svg>'},
  {id:'voleibol',name:'Cancha de voleibol',group:'cancha',location:'COLISEO',description:'Red central, zonas de servicio y espacio de juego.',art:'<svg viewBox="0 0 800 480" aria-hidden="true"><rect x="45" y="45" width="710" height="390" rx="7" fill="#c09257"/><path d="M45 45h710v390H45zM400 45v390M250 45v390M550 45v390" fill="none" stroke="#f7edda" stroke-width="5"/><path d="M392 45v390M408 45v390" stroke="#332a20" stroke-width="3" stroke-dasharray="8 5"/><path d="M45 100h205M550 100h205M45 380h205M550 380h205" stroke="#f7edda" stroke-width="4"/><circle cx="400" cy="240" r="12" fill="#cbf45b"/></svg>'},
  {id:'tenis',name:'Cancha de tenis',group:'cancha',location:'CANCHA EXTERIOR',description:'Red, líneas de servicio y zonas de fondo.',art:'<svg viewBox="0 0 800 480" aria-hidden="true"><rect x="85" y="40" width="630" height="400" rx="5" fill="#397d70"/><path d="M85 40h630v400H85zM145 40v400M655 40v400M145 145h510M145 335h510M400 145v190" fill="none" stroke="#f1eee1" stroke-width="5"/><path d="M385 240h30" stroke="#ff7048" stroke-width="10"/><path d="M85 240h630" stroke="#14211c" stroke-width="9"/><path d="M85 232h630M85 248h630" stroke="#e6e2d5" stroke-width="2"/></svg>'},
  {id:'paintball',name:'Campo de paintball',group:'paintball',location:'ZONA DE JUEGO',description:'Zonas de cobertura y recorridos ilustrados para el juego recreativo.',art:'<svg viewBox="0 0 800 480" aria-hidden="true"><rect x="35" y="35" width="730" height="410" rx="7" fill="#344c3b"/><path d="M35 150 190 35M210 445 420 35M510 445 700 35M35 350 450 35M420 445 765 160" stroke="#a5bb76" stroke-width="35" opacity=".28"/><g fill="#d7c89d" stroke="#17201b" stroke-width="5"><path d="M145 130 220 100 260 142 244 230 159 244 122 190zM415 103 505 120 530 185 475 232 406 205zM275 310 360 282 395 342 350 395 268 371zM555 293 628 265 681 320 657 386 577 381z"/></g><g fill="#ff7048"><circle cx="184" cy="170" r="12"/><circle cx="467" cy="165" r="12"/><circle cx="326" cy="344" r="12"/></g></svg>'}
];
spaces.forEach((space) => { space.photos = spacePhotos[space.id] || []; });

const spaceGallery = document.querySelector('#space-gallery');
const spaceFilters = document.querySelectorAll('[data-space-filter]');
const spaceModalElement = document.querySelector('#space-modal');
const spaceModal = new bootstrap.Modal(spaceModalElement);
const galleryStage = document.querySelector('#gallery-stage');
const spaceRender = document.querySelector('#space-render');
const spacePhotoWrap = document.querySelector('#space-photo-wrap');
const spacePhoto = document.querySelector('#space-photo');
const spaceCredit = document.querySelector('#space-credit');
const spaceViewControls = document.querySelector('#space-view-controls');
let activeSpaceFilter = 'todos';
let selectedSpace = null;

function renderSpaceGallery() {
  const visibleSpaces = spaces.filter((space) => activeSpaceFilter === 'todos' || space.group === activeSpaceFilter);
  spaceGallery.innerHTML = visibleSpaces.map((space) => {
    const photo = space.photos[0];
    return `<article class="space-card"><div class="space-card-art space-${space.id}"><div class="space-card-render" aria-hidden="true">${space.art}</div>${photo ? `<img class="space-card-photo" src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async"><small class="space-photo-badge">FOTO REAL · PEXELS</small>` : ''}<span>${space.location}</span></div><div class="space-card-info"><div><p>${space.group === 'pista' ? 'PISTA / PISCINA' : space.group === 'paintball' ? 'PAINTBALL' : 'CANCHA'}</p><h3>${space.name}</h3><small>${space.description}</small></div><button type="button" class="space-open" data-preview-space="${space.id}" aria-label="Previsualizar ${space.name}">↗</button></div></article>`;
  }).join('');
}

renderSpaceGallery();
// Si una foto local no se puede leer, se mantiene visible la ilustración de la cancha.
spaceGallery.addEventListener('error', (event) => {
  if (event.target.matches('.space-card-photo')) event.target.remove();
}, true);
spaceFilters.forEach((button) => button.addEventListener('click', () => {
  activeSpaceFilter = button.dataset.spaceFilter;
  spaceFilters.forEach((filter) => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  renderSpaceGallery();
}));

spaceGallery.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-preview-space]');
  if (!trigger) return;
  selectedSpace = spaces.find((space) => space.id === trigger.dataset.previewSpace);
  if (!selectedSpace) return;
  document.querySelector('#space-modal-title').textContent = selectedSpace.name;
  document.querySelector('#space-caption').textContent = 'Fotografía de referencia; no representa una instalación de CANJAJE.';
  galleryStage.classList.remove(...spaces.map((space) => `space-${space.id}`), 'view-photo', 'view-aerial', 'view-sideline', 'view-corner');
  galleryStage.classList.add(`space-${selectedSpace.id}`);
  spaceRender.innerHTML = selectedSpace.art;
  const photoViews = selectedSpace.photos.map((photo, index) => ({id:`photo-${index}`,label:selectedSpace.photos.length > 1 ? `FOTO ${index + 1}` : 'FOTO REAL',type:'photo',photo}));
  const views = [...photoViews,{id:'aerial',label:'VISTA AÉREA',type:'aerial'},{id:'sideline',label:'DESDE LA TRIBUNA',type:'sideline'},{id:'corner',label:'ISOMÉTRICA',type:'corner'}];
  spaceViewControls.innerHTML = views.map((view, index) => `<button type="button" class="space-view-btn${index === 0 ? ' active' : ''}" data-gallery-view="${view.id}" aria-pressed="${index === 0}">${view.label}</button>`).join('');
  setSpaceView(views[0]);
  spaceModal.show();
});

function setSpaceView(view) {
  galleryStage.classList.remove('view-photo', 'view-aerial', 'view-sideline', 'view-corner');
  galleryStage.classList.add(`view-${view.type}`);
  const isPhoto = view.type === 'photo';
  spacePhotoWrap.hidden = !isPhoto;
  spaceRender.hidden = isPhoto;
  if (isPhoto) {
    spacePhoto.src = view.photo.src;
    spacePhoto.alt = view.photo.alt;
    spaceCredit.href = view.photo.url;
    spaceCredit.textContent = `Foto: ${view.photo.credit}`;
    document.querySelector('#space-caption').textContent = 'Fotografía real de referencia; muestra otra instalación y no una sede de CANJAJE.';
  } else {
    document.querySelector('#space-caption').textContent = 'Vista ilustrada del espacio; el modelo es conceptual y no representa una instalación existente.';
  }
  spaceViewControls.querySelectorAll('.space-view-btn').forEach((button) => {
    const active = button.dataset.galleryView === view.id;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

spacePhoto.addEventListener('error', () => {
  spacePhotoWrap.hidden = true;
  spaceRender.hidden = false;
  galleryStage.classList.remove('view-photo');
  galleryStage.classList.add('view-aerial');
  document.querySelector('#space-caption').textContent = 'No se pudo cargar la fotografía; mostramos una vista ilustrada del espacio.';
});

spaceViewControls.addEventListener('click', (event) => {
  const button = event.target.closest('[data-gallery-view]');
  if (!button || !selectedSpace) return;
  const photoIndex = Number(button.dataset.galleryView.replace('photo-', ''));
  const mode = button.dataset.galleryView.startsWith('photo-')
    ? {id:button.dataset.galleryView,type:'photo',photo:selectedSpace.photos[photoIndex]}
    : {id:button.dataset.galleryView,type:button.dataset.galleryView};
  setSpaceView(mode);
});

const grid = document.querySelector('#product-grid');
const search = document.querySelector('#product-search');
const filters = document.querySelectorAll('[data-category-filter]');
const count = document.querySelector('#cart-count');
const toastElement = document.querySelector('#cart-toast');
const cartModalElement = document.querySelector('#cart-modal');
const cartModal = new bootstrap.Modal(cartModalElement);
const toast = new bootstrap.Toast(toastElement, {delay:2200});
const cart = new Map();
let activeCategory = 'todos';

const money = (amount) => new Intl.NumberFormat('es-CO', {style:'currency',currency:'COP',maximumFractionDigits:0}).format(amount);

function productCard(product) {
  return `<article class="product-card" data-category="${product.category}">
    <div class="product-art"><span class="product-chip">${product.tag}</span>
      ${product.image?`<img class="product-photo" src="${product.image}" alt="${product.imageAlt}" loading="lazy" decoding="async">`:`<div class="product-shirt ${product.pattern||''}" style="--shirt-color:${product.color};--shirt-mark:${product.mark};--shirt-band:${product.band}" data-number="${product.number}" aria-hidden="true"><i class="band"></i><i class="band alt"></i></div>`}
      <span class="art-label">${product.image?'FOTO DE REFERENCIA':'DISEÑO DE CONCEPTO'}</span>${product.photoCredit?`<a class="product-photo-credit" href="${product.photoUrl}" target="_blank" rel="noopener noreferrer">${product.photoCredit}</a>`:''}
    </div>
    <div class="product-info"><span class="product-category">${categoryNames[product.category]}</span>
      <h3>${product.name}</h3><p class="product-subtitle">${product.subtitle}</p>${product.description?`<p class="product-description">${product.description}</p>`:''}
      <div class="product-bottom"><span class="product-price">${money(product.price)}</span><button class="add-btn" data-add="${product.id}" aria-label="Agregar ${product.name} a la selección">+</button></div>
    </div></article>`;
}

function renderProducts() {
  const query = search.value.trim().toLocaleLowerCase('es');
  const shown = products.filter((product) => (activeCategory==='todos'||product.category===activeCategory||product.extraCategories?.includes(activeCategory)) && `${product.name} ${product.subtitle} ${product.tag} ${product.description||''}`.toLocaleLowerCase('es').includes(query));
  grid.innerHTML = shown.length ? shown.map(productCard).join('') : '<p class="empty-state">No encontramos productos con ese nombre. Prueba otra búsqueda.</p>';
}

function renderCart() {
  const entries = [...cart.entries()];
  const items = document.querySelector('#cart-items');
  count.textContent = entries.reduce((sum,[,qty])=>sum+qty,0);
  items.innerHTML = entries.length ? entries.map(([id,qty])=>{
    const product=products.find((item)=>item.id===id);
    return `<div class="cart-item"><div>${product.name}<small>${qty} × ${money(product.price)}</small></div><div>${money(product.price*qty)}<br><button data-remove="${id}">Quitar</button></div></div>`;
  }).join('') : '<p class="cart-empty">Tu selección está vacía. Explora las camisetas y agrega tus favoritas.</p>';
  const total = entries.reduce((sum,[id,qty])=>sum+products.find((item)=>item.id===id).price*qty,0);
  document.querySelector('#cart-total').textContent = money(total);
  document.querySelector('#cart-request').disabled = entries.length===0;
}

grid.addEventListener('click',(event)=>{
  const button=event.target.closest('[data-add]');
  if(!button)return;
  const id=button.dataset.add;
  cart.set(id,(cart.get(id)||0)+1);
  renderCart();
  toast.show();
});
document.querySelector('#cart-items').addEventListener('click',(event)=>{
  const button=event.target.closest('[data-remove]');
  if(!button)return;
  cart.delete(button.dataset.remove);
  renderCart();
});
filters.forEach((button)=>button.addEventListener('click',()=>{
  activeCategory=button.dataset.categoryFilter;
  filters.forEach((filter)=>{
    const selected=filter===button;
    filter.classList.toggle('active',selected);
    filter.setAttribute('aria-pressed',String(selected));
  });
  renderProducts();
}));
search.addEventListener('input',renderProducts);
document.querySelector('#cart-request').addEventListener('click',()=>{
  cartModal.hide();
  document.querySelector('#request-notice').hidden=false;
  document.querySelector('#request-notice').scrollIntoView({behavior:'smooth',block:'center'});
});
renderProducts();
renderCart();

const kitCarouselElement = document.querySelector('#national-kits');
if (kitCarouselElement) {
  const kitCarousel = new bootstrap.Carousel(kitCarouselElement, {interval: 4600, keyboard: true, pause: 'hover', touch: true, wrap: true});
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reduceMotion.matches) kitCarousel.cycle();
  kitCarouselElement.addEventListener('focusin', () => kitCarousel.pause());
  kitCarouselElement.addEventListener('focusout', (event) => {
    if (!reduceMotion.matches && !kitCarouselElement.contains(event.relatedTarget)) kitCarousel.cycle();
  });
}

const reservationForm = document.querySelector('#reservation-form');
const reservationDate = document.querySelector('#booking-date');
const bookingStatus = document.querySelector('#booking-status');
const today = new Date();
reservationDate.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

function readDemoBookings() {
  try {
    const bookings = JSON.parse(localStorage.getItem('canjaje-demo-bookings') || '[]');
    return Array.isArray(bookings) ? bookings : [];
  } catch {
    return [];
  }
}

reservationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!reservationForm.reportValidity()) return;

  const sport = document.querySelector('#booking-sport').value;
  const date = reservationDate.value;
  const start = Number(document.querySelector('#booking-time').value.slice(0, 2));
  const duration = Number(document.querySelector('#booking-duration').value);
  const end = start + duration;
  const bookings = readDemoBookings();
  const isOccupied = bookings.some((booking) => booking.sport === sport && booking.date === date && start < booking.end && end > booking.start);

  bookingStatus.hidden = false;
  if (isOccupied) {
    bookingStatus.className = 'booking-status booking-status-conflict';
    bookingStatus.textContent = 'Ese horario ya está solicitado en esta demostración. Elige otra hora o fecha.';
    return;
  }

  const booking = {sport, date, start, end, duration, createdAt: new Date().toISOString()};
  try {
    localStorage.setItem('canjaje-demo-bookings', JSON.stringify([...bookings, booking]));
    bookingStatus.className = 'booking-status booking-status-success';
    bookingStatus.textContent = `Solicitud de muestra guardada para ${sport}, el ${date} a las ${String(start).padStart(2, '0')}:00 por ${duration} hora${duration > 1 ? 's' : ''}. Debes confirmar disponibilidad con el lugar.`;
    reservationForm.reset();
  } catch {
    bookingStatus.className = 'booking-status booking-status-conflict';
    bookingStatus.textContent = 'El navegador no permitió guardar la solicitud. Puedes intentarlo nuevamente.';
  }
});
