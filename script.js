let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
  let string = document.getElementById("string").value;
  let string_invertida = "";

  for (let i = string.length - 1; i >= 0; i--) {
    string_invertida += string[i];
  }

  resultado.innerHTML = "A palavra invertida: " + string_invertida;
});
