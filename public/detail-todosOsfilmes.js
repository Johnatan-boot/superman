document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const titulo = params.get('titulo');
  const imagem = params.get('imagem');
  const descricao = params.get('descricao');

  const tituloEl = document.getElementById('titulo-filme');
  const imagemEl = document.getElementById('imagem-filme');
  const descricaoEl = document.getElementById('descricao-filme');
  const conteudoEl = document.getElementById('conteudo-filme');

  if (titulo && imagem && descricao) {
    tituloEl.textContent = titulo;
    imagemEl.src = imagem;
    imagemEl.alt = titulo;

    // ✅ Fallback se imagem quebrar
    imagemEl.onerror = () => {
      imagemEl.src = '/assets/image/error.jpg'; // coloque a imagem de fallback em public/assets/image
      imagemEl.alt = 'Imagem não disponível';
    };

    descricaoEl.textContent = descricao;
  } else {
    // Exibe mensagem de erro se dados estiverem incompletos
    if (conteudoEl) {
      conteudoEl.innerHTML = "<p>Filme não encontrado.</p>";
    } else {
      console.warn("Elemento #conteudo-filme não encontrado no HTML.");
    }
  }
});
