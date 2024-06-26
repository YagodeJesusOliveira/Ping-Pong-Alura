// Variável da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Variável do Jogador
let xJogador = 5;
let yJogador = 150;
let jogadorComprimento = 10;
let jogadorAltura = 90;

// Variável do Oponente
let xOponente = 585;
let yOponente = 150;
let oponenteComprimento = 10;
let oponenteAltura = 90;

let colidiu = false;

// Variável Pontos
let p1Pontos = 0;
let p2Pontos = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraJogador();
  movimentaJogador();
  mostraOponente();
  movimentaOponente();
  verificaColisaoRaquete();
  verificaColisaoOponente();
  Placar();
  vencedor();
  resetarBolinha();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraJogador() {
  rect(xJogador, yJogador, jogadorComprimento, jogadorAltura);
}

function movimentaJogador() {
  if (keyIsDown(87)) { // 87 é o código da tecla 'W'
    yJogador -= 5;
  }
  if (keyIsDown(83)) { // 83 é o código da tecla 'S'
    yJogador += 5;
  }
}

function mostraOponente() {
  rect(xOponente, yOponente, oponenteComprimento, oponenteAltura);
}

function movimentaOponente() {
  if (keyIsDown(UP_ARROW)) {
    yOponente -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yOponente += 5;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xJogador + jogadorComprimento &&
    yBolinha - raio < yJogador + jogadorAltura &&
    yBolinha + raio > yJogador
  ) {
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoOponente() {
  if (
    xBolinha + raio > xOponente &&
    yBolinha - raio < yOponente + oponenteAltura &&
    yBolinha + raio > yOponente
  ) {
    velocidadeXBolinha *= -1;
  }
}

function Placar() {
  fill('white');
  textSize(18);
  text(p1Pontos, 280, 26);
  text(p2Pontos, 320, 26);
  if (xBolinha > width) {
    p1Pontos += 1;
    resetarBolinha();
  }
  if (xBolinha < 0) {
    p2Pontos += 1;
    resetarBolinha();
  }
}

function vencedor() {
  if (p1Pontos >= 15) {
    text('P1 VENCEU', 300, 200);
    noLoop();
  }
  if (p2Pontos >= 15) {
    text('P2 VENCEU', 300, 200);
    noLoop();
  }
}

function resetarBolinha() {
  xBolinha = width / 2;
  yBolinha = height / 2;
  velocidadeXBolinha *= -1;
  velocidadeYBolinha *= random([-1, 1]);
}
