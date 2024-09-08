function pesquisar() {
  // Dados dos Pokémon disponíveis para pesquisa
  const Pikachu = {
    nome: "Pikachu",
    description: "É o Pokémon elétrico mais popular do mundo e o mascote oficial da franquia Pokémon. Conhecido por sua aparência fofa e suas bochechas vermelhas eletrizantes.",
    link: "https://pt.wikipedia.org/wiki/Pikachu",
    tags: "Choque Eletrico Trovao Fofo"
  };

  const Charizard = {
    nome: "Charizard",
    description: "É um dos Pokémon mais icônicos e poderosos da primeira geração. Evolução final de Charmander, Charizard é um tipo Dragão/Fogo.",
    link: "https://pt.wikipedia.org/wiki/Charizard",
    tags: "Fogo chamas chama queima queimar"
  };

  const Bulbasaur = {
    nome: "Bulbasaur",
    description: "Bulbasaur é um Pokémon de tipo planta/veneno. É conhecido por suas habilidades com plantas e sua aparência de sapo.",
    link: "https://pt.wikipedia.org/wiki/Bulbasaur",
    tags: "Bombasauro bumbasauro bombasaro planta"
  };

  const Squirtle = {
    nome: "Squirtle",
    description: "Squirtle é um Pokémon do tipo água e é conhecido por sua carapaça dura e habilidade de lançar jatos d'água. É um dos iniciais da primeira geração.",
    link: "https://www.pokemon.com/br/pokedex/squirtle",
    tags: "Água agua Tartaruga Jato Molhado"
  };

  const Pidgeotto = {
    nome: "Pidgeotto",
    description: "Pidgeotto é um Pokémon do tipo normal/voador e é conhecido por sua agilidade no voo e habilidades em batalhas aéreas. Evolui de Pidgey.",
    link: "https://www.pokemon.com/br/pokedex/pidgeotto",
    tags: " Ar Voo Aéreo Normal Ágil"
  };

  const Leafeon = {
    nome: "Leafeon",
    description: "Leafeon é um Pokémon do tipo planta, evoluído de Eevee quando exposto a uma pedra de folha. É conhecido por sua aparência elegante e habilidades de planta.",
    link: "https://www.pokemon.com/br/pokedex/leafeon",
    tags: "Folha Verde Fresco"
  };

  // Armazena todos os Pokémon em um array
  const dados = [Pikachu, Charizard, Bulbasaur, Squirtle, Pidgeotto, Leafeon];

  // Obtém o valor do input de pesquisa, remove espaços extras e converte para minúsculas
  const inputNome = document.getElementById("pokemon-name").value.trim().toLowerCase();

  // Encontra o Pokémon que corresponde ao nome fornecido
  const resultado = dados.find(dado =>
    dado.nome.toLowerCase().includes(inputNome) ||
    dado.description.toLowerCase().includes(inputNome) ||
    dado.tags.toLowerCase().includes(inputNome)
  );

  // Obtém a seção onde o resultado será exibido
  let section = document.getElementById("item-resultado");

  // Verifica se um resultado foi encontrado
  if (resultado) {
    // Se encontrado, atualiza o conteúdo HTML da seção com as informações do Pokémon
    section.innerHTML = `
      <div class="item-resultado">
        <div class="info-result">
          <h2>${resultado.nome}</h2>
          <a class="btn-fechar" href="#" onclick="fecharInfo()">X</a>
          <p class="title-img">${resultado.description}</p>
          <div class="info-links">
            <a class="btn-info" href="${resultado.link}" target="_blank">Mais informações</a>
          </div>
        </div>
      </div>
    `;
    // Exibe a seção
    section.style.display = "block";
  } else {
    // Se não encontrado, exibe um alerta e oculta a seção
    alert("Pokémon não encontrado");
    section.innerHTML = "";
    section.style.display = "none";
  }
}

// Função para fechar a seção e limpar o campo de input
function fecharInfo() {
  document.getElementById("item-resultado").style.display = "none";
  // Limpa o campo de input
  document.getElementById("pokemon-name").value = "";
}
