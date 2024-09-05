// Função principal para pesquisar e exibir informações sobre Pokémon
function pesquisar() {
  // Dados dos Pokémon disponíveis para pesquisa
  const Pikachu = {
    nome: "Pikachu",
    description: "É o Pokémon elétrico mais popular do mundo e o mascote oficial da franquia Pokémon. Conhecido por sua aparência fofa e suas bochechas vermelhas eletrizantes.",
    link: "https://pt.wikipedia.org/wiki/Pikachu",
    image: "/img/img-01.webp",
    btnFechar: "Fechar"
  };

  const Charizard = {
    nome: "Charizard",
    description: "É um dos Pokémon mais icônicos e poderosos da primeira geração. Evolução final de Charmander, Charizard é um tipo Dragão/Fogo.",
    link: "https://pt.wikipedia.org/wiki/Charizard",
    image: "/img/charizard-perfil.webp",
    btnFechar: "Fechar"
  };

  const Bulbasaur = {
    nome: "Bulbasaur",
    description: "Bulbasaur é um Pokémon de tipo planta/veneno. É conhecido por suas habilidades com plantas e sua aparência de sapo.",
    link: "https://pt.wikipedia.org/wiki/Bulbasaur",
    image: "/img/bulbasaur-perfil.webp",
    btnFechar: "Fechar"
  };

  // Armazena todos os Pokémon em um array
  const dados = [Pikachu, Charizard, Bulbasaur];

  // Obtém o valor do input de pesquisa, remove espaços extras e converte para minúsculas
  const inputNome = document.getElementById("pokemon-name").value.trim().toLowerCase();

  // Encontra o Pokémon que corresponde ao nome fornecido
  const resultado = dados.find(dado => dado.nome.toLowerCase() === inputNome);

  // Obtém a seção onde o resultado será exibido
  let section = document.getElementById("item-resultado");

  // Verifica se um resultado foi encontrado
  if (resultado) {
    // Se encontrado, atualiza o conteúdo HTML da seção com as informações do Pokémon
    section.innerHTML = `
      <div class="item-resultado">
        <div class="info-result">
          <h2>${resultado.nome}</h2>
          <p class="title-img">${resultado.description}</p>
          <a class="btn-info" href="${resultado.link}" target="_blank">Mais informações</a>
           <a href="#" class="btn-info" onclick="fechar(); return false;">Fechar</a>
        </div>
        <img src="${resultado.image}" alt="${resultado.nome}" class="img-result">
      </div>
    `;
    // Exibe a seção
    section.style.display = "block";
  } else {
    // Se não encontrado, limpa o conteúdo da seção e oculta
    section.innerHTML = "";
    section.style.display = "none";
  }
}

// Função para fechar a exibição do resultado
function fechar() {
  // Oculta a seção de resultado
  document.getElementById("item-resultado").style.display = "none";
  // Recarrega a página
  location.reload();
}
