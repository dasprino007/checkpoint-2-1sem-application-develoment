const input_search = document.querySelector("#pesquisar-input");
const lista_atores = document.querySelector(".lista-atores");

function renderAtores(atores) {
  lista_atores.innerHTML = "";

  atores.forEach((ator) => {
    lista_atores.innerHTML += `
            <div class="card-ator">
                <img src="${ator.foto}" alt="${"Foto do " + ator.nome}">
                <h2>${ator.nome}</h2>
                <p>${ator.pais}</p>
                <h3>Data de nascimento</h3>
                <span>${ator.nascimento}</span>
            </div>
        `;
  });
}

function searchActor() {
  const nome_search = input_search.value.toLowerCase();

  const atores_filtrado = atores.filter((ator) =>
    ator.nome.toLowerCase().includes(nome_search.toLowerCase()),
  );

  renderAtores(atores_filtrado);
}

// Quando a pagina renderizar, ele vai rodar esta função
window.addEventListener("load", (event) => {
  renderAtores(atores);
});
