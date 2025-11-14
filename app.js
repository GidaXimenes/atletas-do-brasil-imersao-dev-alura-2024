// Função chamada ao carregar a página (e ao clicar em "Ver Todos")
function mostrarTodos() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = ""; // Limpa resultados anteriores

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria o card para cada atleta
        resultados += `
            <div class="item-resultado">
                <img class="atleta-img" src="${dado.imagem}" alt="Foto de ${dado.titulo}">
                <div class="info-atleta">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            </div>
        `;
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

// Função chamada ao clicar no botão "Pesquisar"
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        // Em vez de mostrar "Nada foi encontrado", mostra todos os atletas
        mostrarTodos();
        return;
    }

    // Converte o termo de pesquisa para minúsculo
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // se o termo de pesquisa estiver no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo card com a imagem
            resultados += `
            <div class="item-resultado">
                <img class="atleta-img" src="${dado.imagem}" alt="Foto de ${dado.titulo}">
                <div class="info-atleta">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            </div>
        `;
        }
    }

    // Se nenhum resultado for encontrado após a filtragem
    if (!resultados) {
        resultados = "<p>Nada foi encontrado para sua busca.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

// Nova função para os botões de filtro rápido
function filtrarPorTag(tag) {
    // Coloca a tag (ex: 'skate') dentro do campo de pesquisa
    document.getElementById("campo-pesquisa").value = tag;

    // Chama a função de pesquisa principal
    pesquisar();
}