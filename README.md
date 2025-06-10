# Chefsito: Tu Asistente de Cocina con IA

![Chefsito Banner](https://i.postimg.cc/GmjbYGZH/logo-chefsito.png)

¡Bienvenido a **Chefsito**! Una aplicación web que va más allá de un simple recetario. Es tu compañero culinario personal, diseñado para explorar deliciosas recetas colombianas y de comida rápida, y para ayudarte en cada paso del camino con un asistente de cocina inteligente impulsado por la más avanzada inteligencia artificial.

## ✨ Características Principales

*   **📚 Recetario Interactivo:** Explora una cuidada selección de recetas, busca tus platos favoritos y descubre nuevas ideas filtradas por categorías como "Populares" y "Comidas Rápidas".
*   **📄 Vista Detallada de Receta:**
    *   **Galería de Imágenes:** Visualiza el plato final y cada paso importante con una galería de imágenes interactiva.
    *   **Checklist de Ingredientes:** Marca los ingredientes que ya tienes a mano para no perderte nada.
    *   **Instrucciones Paso a Paso:** Sigue las instrucciones de forma clara y sencilla, marcando cada paso completado.
*   **🤖 Asistente de Cocina con IA (Chefsito):**
    *   **Respuestas Contextuales:** Entra en el modo "Asistente" de cualquier receta y haz preguntas específicas sobre ella. ¡La IA sabe exactamente de qué receta estás hablando!
    *   **Soporte Culinario:** Pregúntale sobre sustituciones de ingredientes, técnicas de cocción, tiempos, o cualquier otra duda que tengas.
    *   **Chat en Tiempo Real:** Las respuestas de la IA se transmiten en tiempo real (streaming), creando una experiencia de conversación fluida y natural.
    *   **Transparencia de la IA:** ¿Curiosidad por saber cómo piensa el asistente? Puedes expandir una sección para ver el "proceso de pensamiento" que siguió la IA para generar tu respuesta.
*   **🎨 Diseño Moderno y Responsivo:** Interfaz diseñada con Tailwind CSS para una experiencia de usuario elegante, intuitiva y perfectamente adaptable a ordenadores, tabletas y móviles.
*   **🔊 Experiencia de Usuario Mejorada:** Pequeños efectos de sonido para la navegación que hacen que la interacción con la app sea más agradable y dinámica.

## 🚀 ¿Cómo Funciona?

Chefsito combina una arquitectura frontend robusta en Angular con el poder de la API de **Cerebras** (usando el modelo `qwen-3-32b`) para el asistente inteligente.

1.  **Gestión de Recetas:**
    *   Las recetas se almacenan como archivos `JSON` estáticos en `src/assets/recipes/`.
    *   El `RecipeService` se encarga de cargar estas recetas bajo demanda y las almacena en caché para optimizar el rendimiento y evitar cargas innecesarias.

2.  **Asistente de IA:**
    *   Al acceder al asistente de una receta, el `AiAssistantComponent` carga los datos completos de esa receta (ingredientes, instrucciones, etc.).
    *   Se genera un **prompt de sistema** muy detallado que se envía a la IA. Este prompt le proporciona todo el contexto de la receta y le da instrucciones sobre cómo debe comportarse ("Eres un chef experto llamado Chefsito...").
    *   Cuando el usuario envía una pregunta, `AiAssistantService` empaqueta el historial de la conversación y el prompt del sistema y realiza una petición a la API de Cerebras con la opción `stream: true`.
    *   La API devuelve la respuesta en fragmentos (tokens). El frontend los recibe y los muestra en tiempo real, simulando que la IA está "escribiendo".
    *   La respuesta de la IA incluye etiquetas especiales `<think>...</think>` que contienen su razonamiento. El frontend las procesa para mostrar por separado el "pensamiento" y la respuesta final al usuario.
    *   El `MarkdownToHtmlPipe` se utiliza para dar formato a la respuesta de la IA (negritas, listas, etc.) antes de mostrarla.

El `HomeComponent` gestiona la página principal, incluyendo la búsqueda y la visualización de recetas por categorías. El `RecipeDetailComponent` se encarga de mostrar todos los detalles de una receta seleccionada.

## 🛠️ Tecnologías Utilizadas

*   **Frontend:**
    *   [Angular](https://angular.io/)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   [RxJS](https://rxjs.dev/) para la programación reactiva.
    *   HTML5 y CSS3
    *   [Tailwind CSS](https://tailwindcss.com/) para el diseño de la interfaz.
*   **Backend (API de IA):**
    *   [Cerebras AI API](https://www.cerebras.net/product-cloud/) (utilizando el modelo `qwen-3-32b`)
*   **Otros:**
    *   API `Web Audio` del navegador para los efectos de sonido.
    *   API de `Fetch` para el streaming de respuestas de la IA.

## 🧑‍💻 Autor
**Johan Morales**

*   **Portafolio:** [johanmorales211.github.io/portafolio-personal/](https://johanmorales211.github.io/portafolio-personal/)
*   **LinkedIn:** [linkedin.com/in/johan-morales-b3809b206](https://www.linkedin.com/in/johan-morales-b3809b206/)
