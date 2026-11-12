# CANJAJE · Tienda deportiva

Maqueta escolar de catálogo deportivo para la **Institución Educativa Juan Mejía Gómez**, grado sexto. El proyecto prioriza camisetas de fútbol, incluye categorías de baloncesto, béisbol, natación, atletismo, voleibol, tenis y paintball, y agrega calzado, medias, balones de diseños modernos y equipo recreativo de paintball.

## Equipo

- Caleb Jose Morales Arrieta
- Jesus David Urrea Perez
- Jaider Jose Salazar Gonzales
- Andrés Camilo Paba Tapias

## Abrir el sitio

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Inicia `index.html` con una extensión de servidor local, por ejemplo Live Server.
3. También puedes abrir `index.html` directamente en el navegador; se requiere conexión a internet para cargar Bootstrap y las fuentes tipográficas desde sus CDN.

No se necesita instalar paquetes ni compilar el proyecto. La sección de contacto explica el propósito académico; no se publican datos personales ni se reciben pedidos.

## Funciones de la maqueta

- Carrusel automático de conceptos de selecciones: Colombia, Brasil, Argentina, México y Cabo Verde. Se puede controlar con flechas, indicadores, teclado y gestos táctiles; respeta la preferencia `prefers-reduced-motion`.
- Galería con fotografías reales de fútbol, baloncesto, béisbol, natación, atletismo, voleibol, tenis y paintball. El tenis incluye tres fotos de canchas desde distintos puntos de vista; todos los espacios también tienen modelos ilustrados con vistas aérea, desde la tribuna e isométrica.
- Catálogo con búsqueda y filtros por deporte, calzado y accesorios (tenis de cancha, guayos, medias y balones).
- Categoría de paintball con descripciones de muestra para marcadora deportiva, máscara, chaleco y accesorios.
- Agenda de demostración para solicitar horarios de canchas, pista, piscina y campo de paintball. Comprueba conflictos solo con solicitudes guardadas en el mismo navegador.
- Selección local de productos, cantidades y total de muestra.
- Secciones “Quiénes somos” y “Contacto” con el propósito escolar, estudiantes, colegio y grado.
- Diseño responsive con HTML semántico, Bootstrap 5, CSS propio y JavaScript moderno.

## Estructura

```text
index.html
README.md
docs/contexto-proyecto.md
css/styles.css
css/collection-effects.css
css/sports-gallery.css
css/rentals-paintball.css
css/stock-photos.css
js/main.js
assets/images/
assets/icons/
```

## Importante sobre los productos

Los precios y productos son ejemplos para presentar el concepto en clase. Las camisetas del carrusel son ilustraciones originales de concepto, inspiradas en colores y referencias visuales de equipaciones; **no son réplicas exactas, productos oficiales, ni cuentan con licencias de federaciones o fabricantes**. Los nombres de países solo identifican la inspiración visual. El botón de pedido no envía compras ni confirma existencias. La agenda guarda solicitudes en `localStorage` de este navegador; no consulta una sede, calendario compartido, disponibilidad real ni confirma reservas.

Para publicar una tienda real, se deben usar fotografías propias o licenciadas, confirmar precios, productos, tallas y disponibilidad, y conectar un sistema seguro de pedidos y pagos.

## Referencias de diseño consultadas

Estas páginas se consultaron para orientar colores y tendencias de equipaciones. No se descargaron ni se incorporaron sus fotografías, escudos o marcas al proyecto:

- [adidas — colección de selecciones nacionales 2026](https://news.adidas.com/world-cup-2026/adidas-reveals-largest-ever-collection-of-home-kits-ahead-of-fifa-world-cup-2026-/s/a62a06a3-ea5a-4cb7-a585-0379b40ab18f)
- [adidas — camiseta local Colombia 2026](https://www.adidas.com/us/colombia-26-home-jersey/JL6972.html)
- [Nike — camiseta local Brasil 2026](https://www.nike.com/t/brazil-2026-27-match-home-mens-aero-fit-soccer-authentic-jersey-9T2RLU8D/IB5143-724)
- [FIFA Store — camiseta local México 2026](https://store.fifa.com/product/adidas-mexico-2026-authentic-home-jersey-mens)
- [adidas — indumentaria de Argentina](https://www.adidas.com/us/argentina)
- [Unisport — colección Cabo Verde 2026](https://www.unisportsoccer.com/pages/cabo-verde-2026)
- [Inforpress — licencia de réplicas oficiales de Cabo Verde](https://inforpress.cv/en/article-9368)

## Fotografías gratuitas y créditos

Las fotos de la galería y de algunos accesorios se descargaron localmente desde Pexels. La licencia de Pexels permite su uso gratuito; los créditos se incluyen en la previsualización y en los enlaces siguientes.

- Fútbol: [Mateo Franciosi](https://www.pexels.com/photo/dynamic-soccer-match-action-on-stadium-field-39876175/)
- Baloncesto: [Reinis Brūzītis](https://www.pexels.com/photo/basketball-on-blue-indoor-court-with-wood-flooring-34688571/)
- Béisbol: [Keith Cassill](https://www.pexels.com/photo/empty-baseball-field-on-a-clear-day-37007746/)
- Natación: [SHVETS production](https://www.pexels.com/photo/a-swimming-pool-with-clear-water-8028674/)
- Atletismo: [Tomas Anunziata](https://www.pexels.com/photo/modern-runner-stadium-with-empty-seats-411990/)
- Voleibol: [Daniil Kondrashin](https://www.pexels.com/photo/volleyball-players-in-action-on-indoor-court-32681156/)
- Paintball: [Amar Preciado](https://www.pexels.com/photo/obstacles-on-a-paintball-playing-field-15449209/)
- Tenis: [Nightingale](https://www.pexels.com/photo/empty-blue-tennis-court-at-melbourne-s-kia-arena-30011221/), [Luis Flores](https://www.pexels.com/photo/tennis-court-on-stadium-15397232/) y [Ceren Büşra Sevtekin](https://www.pexels.com/photo/outdoor-tennis-court-with-seating-and-lights-35564300/)
- Accesorios de tenis: [Rachel Brooks](https://www.pexels.com/photo/trendy-tennis-aesthetic-with-fashion-accessories-32564811/)
- Tenis de cancha: [cottonbro studio](https://www.pexels.com/photo/person-standing-by-basket-with-balls-at-tennis-court-5741049/)
- Guayos de fútbol: [Muhammed Ali Önem](https://www.pexels.com/photo/close-up-of-football-boots-on-grass-field-32962876/)
- Balón de fútbol: [Hasnain Ali](https://www.pexels.com/photo/soccer-ball-on-green-field-close-up-37234016/)
- [Licencia oficial de Pexels](https://www.pexels.com/license/)
