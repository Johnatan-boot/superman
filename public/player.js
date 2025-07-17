// player.js
let audio;

window.addEventListener('DOMContentLoaded', () => {
  // Evita recriar o player ao navegar
  if (!document.getElementById('theme-audio')) {
    audio = new Audio('/assets/audio/superman-theme.mp3');
    audio.id = 'theme-audio';
    audio.loop = true;
    audio.volume = 0.5;

    // Tocar somente se ainda não estiver tocando
    if (sessionStorage.getItem('isPlaying') !== 'true') {
      audio.play().then(() => {
        sessionStorage.setItem('isPlaying', 'true');
      }).catch((err) => {
        console.warn("Autoplay bloqueado, usuário deve interagir primeiro.");
      });
    }

    document.body.appendChild(audio);

    // Adiciona botão para controle manual
    const btn = document.createElement('button');
    btn.textContent = '🔊 Parar música';
    btn.style = `
      position: fixed; bottom: 20px; right: 20px;
      background: linear-gradient(90deg, #e10600, #fbdc00, #0033a0), color: white;
      border: none; padding: 10px 15px;
      border-radius: 10px; cursor: pointer;
      font-size: 14px; z-index: 1000;
    `;

    btn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        btn.textContent = '🔊 Parar música';
        sessionStorage.setItem('isPlaying', 'true');
      } else {
        audio.pause();
        btn.textContent = '🔈 Tocar música';
        sessionStorage.setItem('isPlaying', 'false');
      }
    });

    document.body.appendChild(btn);
  }
});
