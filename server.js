const path = require("path");

//esta linha significa que o node.js vai fazer importação de modulos require significa -> importação
const http = require("http");
//proximo passo
/*O módulo httpé responsável por criar e subir um servidor, mas qual servidor ele irá subir? Sim, até agora não criamos nenhum servidor, como essa é uma tarefa um tanto quanto chata, vamos utilizar um framework chamadoExpress:
*/
const express = require("express"); //importando o modulo express.js Pois é, ele é o responsável por realizar o download de nossas dependências, 

/*Definindo a rota de nosso servidor e Criamos o App
Para exemplo do post vamos definir apenas a rota principal, em outras palavras, a rota raiz, que é acessada quando informamos apenas a porta.
O primeiro passo será criar uma app, podemos fazer isso executando uma função que o express possuí:*/
const app = express();


/*Subindo o servidor
Agora que já temos tudo que precisamos vamos de fato subir nosso servidor.
Conforme dito anteriormante, para subir nosso servidor vamos utilizar o módulo do http, através dele temos uma função chamada createServer onde devemos passar um servidor para ele, mas, quem será nosso servidor? Sim, se você pensou no express parabéns, você acertou.*/
//http.createServer(express); trecho desnecessario

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

/*CRIANDO NOSSA PRIMEIRA ROTA*/
/*Olha Express, quando alguém realizar uma requisição do tipo get para a raiz (informando apenas 
a porta), pegue a resposta (res) e envie (send) uma tag h1 com o conteúdo “Servidor rodando com ExpressJS”.*/
// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/atores', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'atores.html'));
});
app.get('/historia', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'historia.html'));
});
app.get('/kriptonOcachorro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kriptonOcachorro.html'));
});



/*Rodando o servidor
Como podemos fazer para que nosso servidor fique rodando eternamente até o mesmo ser parado? Para isso temos a função listen do http, ela recebe como primeiro parâmetro a porta que o servidor ficará escutando (aguardando requisições) e como segundo parâmetro devemos passar uma função de callback (que será executada após o servidor estiver rodando).
*/
//http.createServer(express).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
/*Agora por último, na função createServer devemos passar agora o app e não mais o express:*/
//http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));




