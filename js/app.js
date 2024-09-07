function navegarParaHabilidade() {
  const select = document.getElementById("habilidade-select");
  const habilidade = select.value;

  if (habilidade === "terra") {
    window.location.href = "/pokemon-terra.html";
  } else if (habilidade === "fogo") {
    window.location.href = "/pokemon-fogo.html";
  } else if (habilidade === "agua") {
    window.location.href = "/pokemon-agua.html";
  }
}