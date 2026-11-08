console.log("canvas.js carregou");
const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

function desenhar_quadrado(x, y, lado, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, lado, lado);
}

function desenhar_linha(x1, y1, x2, y2, cor) {
  ctx.strokeStyle = cor;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function desenhar_arco(x, y, raio, inicio, fim, cor, preencher) {
  ctx.beginPath();
  ctx.arc(x, y, raio, inicio, fim);
  if (preencher) {
    ctx.fillStyle = cor;
    ctx.fill();
  } else {
    ctx.strokeStyle = cor;
    ctx.stroke();
  }
}

function escrever(texto, x, y, cor) {
  ctx.fillStyle = cor;
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.fillText(texto, x, y);
}


const PI = Math.PI;

desenhar_quadrado(0, 0, 50, "blue");
desenhar_quadrado(250, 0, 50, "red");


desenhar_linha(50, 50, 150, 150, "blue");
desenhar_linha(250, 50, 150, 150, "red");


desenhar_linha(0, 150, 300, 150, "green");
desenhar_linha(150, 150, 150, 300, "green");


desenhar_quadrado(0, 120, 30, "cyan");
desenhar_quadrado(0, 150, 30, "cyan");
desenhar_quadrado(270, 135, 30, "cyan");


desenhar_quadrado(110, 150, 40, "red");


desenhar_arco(150, 150, 75, PI, 2 * PI, "green", false);
desenhar_arco(150, 150, 50, PI, 2 * PI, "green", false);
desenhar_arco(150, 115, 15, 0, 2 * PI, "cyan", true);


desenhar_arco(150, 300, 75, PI, 2 * PI, "green", false);
desenhar_arco(150, 300, 50, PI, 2 * PI, "green", false);
desenhar_arco(150, 300, 40, PI, 2 * PI, "cyan", true);


desenhar_arco(70, 220, 15, 0, 2 * PI, "yellow", true);
desenhar_arco(230, 220, 15, 0, 2 * PI, "yellow", true);

desenhar_quadrado(0, 240, 30, "yellow");
desenhar_quadrado(0, 270, 30, "yellow");
desenhar_quadrado(30, 270, 30, "yellow");

desenhar_quadrado(270, 240, 30, "black");
desenhar_quadrado(270, 270, 30, "black");
desenhar_quadrado(240, 270, 30, "black");

// texto
escrever("Canvas", 150, 45, "black");