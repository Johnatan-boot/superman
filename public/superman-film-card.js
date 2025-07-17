class SupermanFilmCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
   template.innerHTML = `
  <style>
    .card {
      background: var(--card-bg);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      border-radius: 20px;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 360px;
      object-fit: cover;
    }

    .content {
      padding: 1rem;
      flex-grow: 1;
    }

    h3 {
      font-size: 1.2rem;
      color: var(--blue-primary);
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.95rem;
      color: #444;
      line-height: 1.4;
    }

    button {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  color: #fff;
  background: linear-gradient(90deg, #e10600, #fbdc00, #0033a0);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 51, 160, 0.5);
}

  </style>

  <div class="card">
    <img />
    <div class="content">
      <h3></h3>
      <p></p>
      <button id="verDetalhes">Ver detalhes</button>
    </div>
  </div>
`;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
  this.shadowRoot.querySelector('img').src = this.getAttribute('imagem');
  this.shadowRoot.querySelector('img').alt = this.getAttribute('titulo');
  this.shadowRoot.querySelector('h3').textContent = this.getAttribute('titulo');
  this.shadowRoot.querySelector('p').textContent = this.getAttribute('descricao');

  this.shadowRoot.querySelector('#verDetalhes')
    .addEventListener('click', () => this.mostrarDetalhes());
}


mostrarDetalhes() {
  const id = this.getAttribute('idfilme');
  const titulo = this.getAttribute('titulo');
  const imagem = this.getAttribute('imagem');
  const descricao = this.getAttribute('descricao');

  // Codificar valores na URL para não dar erro com espaços
  const params = new URLSearchParams({
    id,
    titulo,
    imagem,
    descricao
  });

window.location.href = `/detail-todosOsfilmes?${params.toString()}`;
}




}

customElements.define('superman-film-card', SupermanFilmCard);
