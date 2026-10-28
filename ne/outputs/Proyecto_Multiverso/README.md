# Portal del Multiverso

Proyecto académico de desarrollo web de **Saul Ulises Claudio Chan** para explorar personajes mediante la API pública de Rick and Morty.

## Funciones

- Consulta datos reales con `fetch()` desde `https://rickandmortyapi.com/api/character`.
- Presenta hasta 20 personajes por página con retrato, descripción de atributos, estado, especie, género y ubicaciones.
- Búsqueda por nombre y filtros por estado y especie sobre la página cargada.
- Paginación usando los enlaces `next` y `prev` devueltos por la API.
- Favoritos persistentes en `localStorage` y vista de favoritos de la página actual.
- Tema claro/oscuro persistente (mejora extra) y orden alfabético dentro de la página actual.
- Mensajes para carga, errores de conexión, respuesta inesperada y resultados sin coincidencias.
- Diseño adaptable y controles etiquetados para teclado/lectores de pantalla.

## Archivos

- `index.html`: estructura y controles de la página.
- `style.css`: presentación responsive y temas.
- `script.js`: consulta, filtros, paginación y almacenamiento.

## Uso

Abre `index.html` en un navegador con conexión a Internet. La API es pública y no requiere clave. En GitHub Pages, sube los tres archivos a la raíz del repositorio y configura Pages para publicar desde la rama principal y la carpeta raíz. Después de guardar la configuración, abre la dirección que indique GitHub y comprueba que las tarjetas carguen.

## API y atribución

Los datos e imágenes se obtienen en tiempo real desde [The Rick and Morty API](https://rickandmortyapi.com/documentation). La API pagina automáticamente los resultados; cada respuesta incluye hasta 20 personajes y enlaces de navegación.

## Límites conocidos

La búsqueda y los filtros actúan sobre los personajes de la página que está cargada. Los favoritos se guardan en este navegador y la vista de favoritos muestra los guardados que estén presentes en la página actual. Si `localStorage` está deshabilitado, el resto del catálogo sigue disponible, pero los favoritos no persistirán.

## Uso de inteligencia artificial y reflexión

Completa esta sección con tu experiencia real antes de entregar:

1. Prompt utilizado: [pegar prompt real y resumir qué cambiaste].
2. Prompt utilizado: [pegar prompt real y resumir qué cambiaste].
3. Prompt utilizado: [pegar prompt real y resumir qué cambiaste].
4. Respuesta de IA que corregí: [qué decía, qué verificaste y cuál fue el arreglo].
5. Error encontrado y resuelto: [describe un error que realmente observaste].
6. Modificación extra que puedo explicar: tema claro/oscuro y/o orden A–Z [explicar con tus palabras].
7. Reflexión: [qué aprendiste y qué parte verificaste por tu cuenta].

## Entrega

- URL del repositorio: [completar después de crear el repositorio público `proyecto-web-ia`].
- URL de GitHub Pages: [completar después de activar y comprobar Pages].
- Agrega integrantes reales, Issues, Pull Request, commits auténticos y capturas propias según la consigna.

## Créditos

Proyecto de práctica. Rick and Morty es una obra de sus respectivos titulares; los datos se consultan a través de la API enlazada arriba.
