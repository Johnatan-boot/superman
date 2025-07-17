class ActorCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .card {
          background: var(--card-bg);
          border-radius: var(--card-radius);
          box-shadow: var(--shadow);
          border-left: 6px solid var(--secondary-color);
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
        }

        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1rem;
          border: 4px solid var(--primary-color);
        }

        h3 {
          margin: 0.5rem 0 0.2rem;
          color: var(--primary-color);
          font-size: 1.3rem;
        }

        span {
          color: var(--secondary-color);
          font-weight: bold;
          font-size: 0.9rem;
        }

        p {
          font-size: 0.95rem;
          margin-top: 0.8rem;
          line-height: 1.5;
          color: #333;
        }
      </style>

      <div class="card">
        <img />
        <h3></h3>
        <span></span>
        <p></p>
      </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('img').src = this.getAttribute('img');
    this.shadowRoot.querySelector('img').alt = this.getAttribute('name');
    this.shadowRoot.querySelector('h3').textContent = this.getAttribute('name');
    this.shadowRoot.querySelector('span').textContent = this.getAttribute('role');
    this.shadowRoot.querySelector('p').textContent = this.getAttribute('desc');
  }
}

customElements.define('actor-card', ActorCard);
