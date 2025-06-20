// Función para cargar el HEAD y HEADER
function loadCommonComponents() {
  // Inyectar HEADER
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    
    <nav class="top-header">
        <a href="index.html" class="logo">
          <img src="imagenes/logo.png" alt="Logo Artea" />
        </a>
        <!-- BOTÓN HAMBURGUESA -->
        <button class="menu-toggle" aria-label="Abrir menú">
          &#9776;
          <!-- Ícono de hamburguesa -->
        </button>
        <ul class="menu-horizontal">
          <li><a href="index.html">Inicio</a></li>
          <li>
            <a href="galeria.html">Galería</a>
            <ul class="menu-vertical">
              <li><a href="panel-tendencias.html">Tendencias</a></li>
              <li><a href="guardar-creacion.html">Mis creaciones</a></li>
              <li><a href="buen-trabajo.html">Recursos</a></li>
            </ul>
          </li>
          <li>
            <a href="crear.html">Crear</a>
            <ul class="menu-vertical">
              <li>
                <a href="emocion-inicio.html"
                  >¿Cómo te sientes antes de comenzar?</a
                >
              </li>
              <li>
                <a href="evento-invitacion.html">Eventos Especiales</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Inspiración</a>
            <ul class="menu-vertical">
              <li>
                <a href="inspiracion.html">Inspírate cada día</a>
              </li>
              <li><a href="crea.html">Crea con Libertad</a></li>
              <li>
                <a href="registrar-ciclo.html"
                  >Registrar ciclo <br />académico</a
                >
              </li>
              <li>
                <a href="salas-creativas.html">Salas creativas</a>
              </li>
              <li>
                <a href="pausa-invitacion.html"
                  >¿Te gustaria tomar una pausa emocional?
                </a>
              </li>
            </ul>
          </li>
          <li><a href="contacto.html">Contacto</a></li>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="opiniones.html">Opiniones</a></li>
          <li>
            <a href="cuenta.html" class="btn-cuenta">
              <i class="fa-solid fa-circle-user"></i>
              <span>Cuenta</span>
            </a>
          </li>
        </ul>
      </nav>
    
    `
  );

  // Inyectar FOOTER
  document.body.insertAdjacentHTML(
    "beforeend",
    `
        <footer class="footer-section">
      <div class="footer-container">
        <div class="footer-column">
          <h3>Información</h3>
          <ul>
            <li><a href="#">Sobre Artea</a></li>
            <li><a href="#">Nuestro enfoque</a></li>
            <li><a href="#">Equipo y contacto</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Herramientas</h3>
          <ul>
            <li><a href="#">Diario emocional</a></li>
            <li><a href="#">Modo dibujo / escritura</a></li>
            <li><a href="#">Música relajante</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Explora</h3>
          <ul>
            <li><a href="#">Galería de emociones</a></li>
            <li><a href="#">Creaciones destacadas</a></li>
            <li><a href="#">Retos semanales</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Consejos</h3>
          <ul>
            <li><a href="#">Técnicas para reducir el estrés</a></li>
            <li><a href="#">Ejercicios de respiración</a></li>
            <li><a href="#">¿Dónde aprender a crear?</a></li>
          </ul>
        </div>
      </div>
      <hr class="footer-line" />
      <div class="footer-bottom">
        <p>&copy; 2025 Artea | Todos los derechos reservados</p>
      </div>
    </footer>
    `
  );
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", loadCommonComponents);

document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el botón de hamburguesa
  const btn = document.querySelector(".menu-toggle");

  // Selecciona el menú horizontal
  const menu = document.querySelector(".menu-horizontal");

  // Al hacer clic en el botón de hamburguesa
  btn.addEventListener("click", () => {
    // Alterna (agrega o quita) la clase "active" en el menú
    // Esto hace que se muestre o se oculte
    menu.classList.toggle("active");

    // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
    // btn.classList.toggle("open");
  });
});

// Puedes colocar este script en un archivo JS que cargues en todas tus páginas,
// o directamente dentro de una etiqueta <script> en el <head> o al final del <body>.

const links = [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  {
    href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
    rel: "stylesheet",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
  },
];

links.forEach((attrs) => {
  const link = document.createElement("link");
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === "") {
      link.setAttribute(key, "");
    } else {
      link[key] = value;
    }
  });
  document.head.appendChild(link);
});

window.addEventListener("DOMContentLoaded", () => {
  const contenedorSlider = document.getElementById("contenedorSlider");
  const btnLogin = document.getElementById("btnLogin");
  const btnRegistro = document.getElementById("btnRegistro");

  btnLogin.addEventListener("click", () => {
    contenedorSlider.classList.add("activar-login");
  });

  btnRegistro.addEventListener("click", () => {
    contenedorSlider.classList.remove("activar-login");
  });
});
