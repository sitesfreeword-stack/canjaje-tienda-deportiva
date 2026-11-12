# CANJAJE — contexto del proyecto

## Descripción

CANJAJE es una tienda deportiva escolar planteada como sitio web de catálogo para la venta de camisetas de equipos de fútbol y, en una siguiente etapa, prendas de otros deportes. El fútbol será el eje principal de la experiencia. El nombre de marca se conserva exactamente como lo indicó el grupo.

El sitio se dirige principalmente a jóvenes de 14 a 30 años y debe sentirse enérgico, actual, fácil de recorrer y distinto a una plantilla genérica. La propuesta visual combina códigos de equipación deportiva, una paleta oscura con verde lima y naranja, tipografía contundente, ilustraciones propias construidas con CSS y detalles editoriales inspirados en las tribunas y el juego. La colección permite filtrar fútbol, baloncesto, béisbol, natación, atletismo, voleibol, tenis, paintball y accesorios.

## Información académica

- **Institución:** Institución Educativa Juan Mejía Gómez
- **Grado:** Sexto
- **Integrantes:**
  - Caleb Jose Morales Arrieta
  - Jesus David Urrea Perez
  - Jaider Jose Salazar Gonzales
  - Andrés Camilo Paba Tapias

## Objetivo del sitio

Presentar la marca, mostrar un carrusel automático de conceptos de camisetas de selecciones (Colombia, Brasil, Argentina, México y Cabo Verde), ofrecer una galería conceptual de escenarios deportivos con vistas aérea, desde la tribuna e isométrica, un catálogo navegable por deporte y accesorios (calzado deportivo, medias, balones modernos y equipo recreativo de paintball) y permitir armar una selección de productos. Incluye una agenda demostrativa para solicitudes de horario de canchas, pista, piscina y campo de paintball. Las secciones “Quiénes somos” y “Contacto” explican el propósito escolar e identifican estudiantes, colegio y grado. La interfaz actual es una maqueta académica: no procesa pagos, no confirma inventario ni reservas y no envía pedidos a un negocio real.

## Público y tono

- Público principal: jóvenes de 14 a 30 años, además de familias y aficionados al deporte.
- Tono: cercano, seguro, apasionado por el deporte y fácil de entender.
- Contenido: español claro, frases breves y llamadas a la acción directas.
- No presentar estadísticas, reseñas, licencias oficiales, existencias ni promesas comerciales como hechos sin validarlos.

## Dirección visual

- **Concepto:** el vestuario como identidad de equipo y expresión de afición.
- **Paleta:** carbón y azul noche como base; lima para interacción; naranja para acentos.
- **Tipografía:** display condensada para titulares y sans serif legible para lectura e interfaz.
- **Recursos:** franjas y costuras inspiradas en camisetas, ilustraciones CSS de prendas, numeración editorial, contraste alto y espacios amplios.
- **Accesibilidad:** HTML semántico, navegación por teclado, etiquetas accesibles, estados de foco visibles, contraste suficiente y respeto por `prefers-reduced-motion`.
- Evitar tarjetas repetitivas sin propósito, emojis como iconos, datos de stock inventados y controles que parezcan funcionales sin serlo.

## Alcance técnico

- HTML5 semántico.
- Bootstrap 5 para la base responsive y componentes utilitarios donde aporte valor.
- CSS propio en `css/styles.css` para mantener una identidad diferenciada.
- JavaScript moderno en `js/main.js` para filtros, búsqueda, menú móvil y selección local del carrito.
- Sin framework ni proceso de compilación requerido.
- Bootstrap y fuentes web se cargan desde CDN; el sitio necesita conexión para esas dependencias externas.
- El carrusel se detiene para quien use la preferencia de sistema `prefers-reduced-motion`.
- La galería y algunas fichas de producto usan fotos Pexels guardadas localmente en `assets/images`; las vistas aéreas, laterales e isométricas son ilustraciones SVG. Las fuentes y créditos están en `README.md`.

## Estructura escalable

```text
webDeportiva/
├── index.html
├── docs/
│   └── contexto-proyecto.md
├── css/
│   ├── styles.css
│   ├── sports-gallery.css
│   └── stock-photos.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    └── icons/
```

Las carpetas de assets quedan listas para futuras fotografías de producto, logotipo e iconografía optimizados. El catálogo de muestra se define en JavaScript para que luego pueda reemplazarse por datos de un servicio o CMS. `README.md` contiene instrucciones de ejecución, alcance y fuentes de referencia visual.

## Catálogo de demostración

Los productos, precios en COP, equipos y categorías mostrados en la maqueta sirven para ilustrar el diseño y la interacción; no representan catálogo, licencia, inventario ni precios confirmados. Las camisetas del carrusel son ilustraciones originales de concepto basadas en paletas y referencias de equipaciones actuales, no reproducciones exactas, artículos oficiales ni diseños autorizados por federaciones o marcas. Antes de publicar una tienda real, reemplazarlos por información aprobada e imágenes propias o licenciadas, y añadir origen de datos, política de envíos/devoluciones, contacto, términos, privacidad y un flujo de pago seguro.

## Próximas etapas posibles

1. Validar con el grupo nombre, colores, escudo y contenido.
2. Sustituir las ilustraciones CSS por fotos propias o debidamente licenciadas.
3. Conectar catálogo, tallas, disponibilidad y precios reales.
4. Añadir información de contacto y políticas del negocio.
5. Integrar backend y proveedor de pagos si el proyecto pasa de maqueta académica a tienda operativa.
