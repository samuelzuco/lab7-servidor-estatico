console.log("animacao.js carregou");

const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "imagem.png";  

const largura = 50;
const altura = 50;                                                  


let x = (canvas.width - largura) / 2;
let y = (canvas.height - altura) / 2;


document.addEventListener("mousemove", function (evento) {
  const rect = canvas.getBoundingClientRect();


  const mouseX = evento.clientX - rect.left - canvas.clientLeft;
  const mouseY = evento.clientY - rect.top - canvas.clientTop;

  x = mouseX - largura / 2;
  y = mouseY - altura / 2;

  x = Math.max(0, Math.min(canvas.width - largura, x));
  y = Math.max(0, Math.min(canvas.height - altura, y));
});

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, x, y, largura, altura);
  requestAnimationFrame(animar);
}

animar();