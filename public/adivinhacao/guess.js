
const sorteado = Math.floor(Math.random() * 100);

function verificar() {
  const valor = Number(document.getElementById("palpite").value);
  const msg = document.getElementById("mensagem");
  const caixa = document.getElementById("caixa");

  if (valor > sorteado) {
    msg.textContent = "Menor! Tente de novo.";
    caixa.style.setProperty("background-color", "red");
  } else if (valor < sorteado) {
    msg.textContent = "Maior! Tente de novo.";
    caixa.style.setProperty("background-color", "red");
  } else {
    msg.textContent = "Acertou! 🎉";
    caixa.style.setProperty("background-color", "lightgreen");
  }
}