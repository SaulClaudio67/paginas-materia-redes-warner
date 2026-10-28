# Fuerza Base — Catálogo de ejercicios de gimnasio

Proyecto académico de **Saul Ulises Claudio Chan**. Es una aplicación web en HTML, CSS y JavaScript que consulta ejercicios reales desde la API pública wger.

## Funciones

- Solicitud de datos con `fetch()` a `https://wger.de/api/v2/exerciseinfo/?limit=50`.
- Paginación usando los enlaces que devuelve la API.
- Búsqueda por nombre y descripción; filtros por grupo muscular y equipo en la página cargada.
- Tarjetas con nombre, músculos, equipo, descripción e imagen si el registro la incluye.
- Si falta la imagen o descripción, la interfaz lo indica; no inventa instrucciones de ejercicio.
- Favoritos guardados en `localStorage`.
- Orden alfabético A–Z y tema claro/oscuro como mejoras adicionales.
- Mensajes de carga, error de conexión y búsqueda vacía.
- Diseño adaptable a móvil y escritorio.

## Archivos

- `index.html`: estructura y controles.
- `style.css`: estilos, diseño móvil y temas.
- `script.js`: consumo de API, paginación, filtros y favoritos.
- `contador.html`: contador de series para la práctica del manual.
- `index-practica.html`: página HTML inicial para la práctica del manual.

## Cómo usarlo

Abre `index.html` con conexión a Internet. Los registros públicos del catálogo se consultan sin iniciar sesión. Para cumplir la consigna, crea en GitHub el repositorio público `proyecto-web-ia`, sube los tres archivos principales y habilita Pages desde la rama principal y la carpeta raíz. Después abre la URL que muestre GitHub y comprueba que cargue.

## API, créditos y licencia

Los datos y las posibles imágenes proceden de [wger](https://wger.de/). La documentación oficial describe su REST API y sus endpoints públicos de ejercicios. Revisa la atribución y licencia indicadas por cada registro antes de redistribuirlo. Documentación: [wger API](https://wger.readthedocs.io/en/latest/api/api.html).

## Límites

Los filtros y la búsqueda actúan sobre la página cargada, no sobre todo el catálogo del servidor. Los favoritos se guardan en este navegador. La disponibilidad de traducciones, descripciones e imágenes depende de cada registro. Esta página es informativa y no ofrece prescripción médica ni sustituye la orientación de un profesional de ejercicio.

## Uso de inteligencia artificial

Los siguientes prompts corresponden a las instrucciones que guiaron este proyecto en la conversación de trabajo:

1. **Preparar los documentos:** “Necesito realizar estos 3 documentos a mi nombre ‘Saul Ulises Claudio Chan’; para que no sean los mismos textos, hazlos de diferente tema si es necesario”. Esto definió el nombre y la necesidad de redactar contenido original.
2. **Crear el código:** “¿Puedes hacer los códigos que piden?”. Esto llevó a revisar los requisitos de la actividad y preparar los archivos HTML, CSS, JavaScript y README.
3. **Cambiar el tema:** “Necesito hacerlo con otro tema, podría ser de ejercicios de un gimnasio”. Esto reemplazó las propuestas de temas anteriores por el catálogo de gimnasio Fuerza Base.

### Ajuste y revisión de la respuesta de IA

La primera propuesta de aplicación usaba personajes de Rick y Morty y luego se había planteado una guía de biodiversidad. El alumno pidió cambiar el tema al gimnasio, por lo que esas propuestas se descartaron y el código y los documentos se adaptaron a Fuerza Base. Esta fue una corrección de tema solicitada durante el trabajo, no una prueba técnica de la API.

Durante la revisión del código también se quitó una suposición inicial sobre identificadores numéricos de idioma. El selector busca una traducción cuyo metadato indique español y, si no la encuentra, usa la primera traducción disponible. **No se ha comprobado todavía en el navegador que la API entregue los metadatos en ese formato; verifícalo al ejecutar el proyecto.**

### Error técnico y solución

No se ha observado ni reproducido todavía un error de ejecución del sitio, porque falta probarlo en un navegador con la API cargada. La implementación contempla respuestas HTTP fallidas, falta de conexión y campos sin imagen o descripción; muestra mensajes para esos casos. Después de probarlo, reemplaza esta nota con un error que realmente hayas visto, los pasos para reproducirlo y la solución aplicada. No presentes un error hipotético como si hubiera ocurrido.

### Mejora adicional

La aplicación incorpora tema claro/oscuro persistente en `localStorage` y orden alfabético A–Z. Para explicarlos, sigue en `script.js` los eventos de los botones `#theme-toggle` y `#sort`: cambian el estado, vuelven a representar la lista y guardan la preferencia del tema en el navegador.

### Reflexión — borrador para personalizar

El proyecto permite practicar cómo una página solicita información a una API y la presenta con controles de búsqueda y filtros. Antes de entregar, debo probar la aplicación, revisar si la respuesta real coincide con lo que espera el código y poder explicar cada función. Completa o reescribe esta reflexión con lo que tú hayas aprendido al subir y probar el proyecto.

## Evidencia de la tarea

El alumno confirma que realizó las acciones de la actividad. Completa las referencias concretas para que el docente pueda comprobarlas.

| Evidencia solicitada | Estado | Enlace o evidencia |
| --- | --- | --- |
| Integrantes del equipo | Realizado (confirmado por el alumno) | Saul Ulises Claudio Chan; agregar otros integrantes si corresponde. |
| Repositorio público `proyecto-web-ia` | Realizado (confirmado por el alumno) | [Pegar URL del repositorio] |
| Al menos 6 commits | Realizado (confirmado por el alumno) | [Pegar URL del historial o captura] |
| Al menos 2 Issues | Realizado (confirmado por el alumno) | [Pegar enlaces de los Issues] |
| Pull Request | Realizado (confirmado por el alumno) | [Pegar URL del Pull Request] |
| GitHub Pages | Realizado (confirmado por el alumno) | [Pegar URL publicada y captura del sitio funcionando] |
| Evidencia del programa estudiantil | Realizado (confirmado por el alumno, si aplica a la actividad) | [Insertar captura propia; ocultar datos privados] |
| Prompts, corrección, error y reflexión | Realizado (confirmado por el alumno) | Los prompts están registrados arriba; agregar la descripción del error observado y la reflexión personal. |

