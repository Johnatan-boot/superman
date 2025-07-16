# 🚀 Criando o Primeiro Servidor com Node.js

Este repositório marca o início da minha jornada com **Node.js**, onde desenvolvi e fiz o deploy do meu primeiro servidor básico. O objetivo foi entender o funcionamento interno de um servidor HTTP utilizando JavaScript no ambiente backend, sem frameworks no início — e depois explorando o uso do Express.js para facilitar rotas e middleware.

---

## 📚 O que eu aprendi

Durante o desenvolvimento deste projeto, aprendi:

- Como o Node.js lida com requisições e respostas HTTP usando o módulo `http`.
- A estrutura básica de um servidor web sem o uso de frameworks.
- Criação de rotas simples e como retornar diferentes tipos de conteúdo (HTML, JSON, texto).
- Uso do `nodemon` para desenvolvimento com recarga automática.
- Introdução ao framework **Express.js** para simplificar rotas e middlewares.
- Como fazer o **deploy de uma aplicação Node.js no Render** (alternativa gratuita ao Heroku).
- Boas práticas de organização de código e semântica de commits.

---

## 🧪 Tecnologias utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **Node.js** | Plataforma para execução de código JavaScript no servidor |
| **Express.js** | Framework minimalista e flexível para Node.js |
| **Nodemon** | Ferramenta de desenvolvimento que reinicia o servidor automaticamente |
| **Render** | Plataforma de deploy para aplicações web |
| **Git** e **GitHub** | Versionamento de código e hospedagem do repositório |
| **VS Code** | Editor de código principal utilizado |

---

## 🔥 Dificuldades enfrentadas

Durante o processo, enfrentei alguns desafios importantes:

- Entender como o Node.js manipula as requisições diretamente sem abstrações.
- Aprender a diferença entre rotas e métodos HTTP na prática.
- Erros comuns com portas ocupadas ou falta de tratamento de erros no servidor.
- Configurar variáveis de ambiente para uso seguro em produção.
- Fazer o deploy no Render, principalmente com o `start script` correto e as configurações do `package.json`.

Essas dificuldades, no entanto, me ajudaram a **compreender melhor os bastidores de uma API** e a importância de boas práticas desde o início.

---

## ☁️ Deploy do Projeto

O projeto está publicado na web por meio do serviço Render.

🔗 **Acesse aqui:** [https://meu-servidor-node.onrender.com](https://meu-servidor-node.onrender.com)

---

## 📁 Como executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/criando-primeiro-servidor-node.js.git
cd criando-primeiro-servidor-node.js
