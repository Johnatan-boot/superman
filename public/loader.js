document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const destino = link.getAttribute("href");
      mostrarTelaLoading(destino);
    });
  });
});

function mostrarTelaLoading(destino) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "#1D65C1"; // fundo azul Superman
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = 9999;

  const escudo = document.createElement("img");
  escudo.src = "/assets/image/logo/logoUpdate-Photoroom.png";
  escudo.style.width = "80px";
  escudo.style.animation = "grow 1.2s ease-in-out forwards";
  escudo.style.filter = "drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))";

  const texto = document.createElement("p");
  texto.textContent = "Carregando...";
  texto.style.color = "#fff";
  texto.style.marginTop = "1.2rem";
  texto.style.fontSize = "1.2rem";
  texto.style.fontWeight = "500";
  texto.style.letterSpacing = "1px";

  overlay.appendChild(escudo);
  overlay.appendChild(texto);
  document.body.appendChild(overlay);

  // Adiciona a animação ao final da página
  const style = document.createElement("style");
  style.textContent = `
    @keyframes grow {
      0% {
        transform: scale(0.3);
        opacity: 0;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.9;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);

  // Espera antes de redirecionar
  setTimeout(() => {
    window.location.href = destino;
  }, 1400);
}
