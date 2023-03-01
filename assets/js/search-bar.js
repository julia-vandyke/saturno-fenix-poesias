// Seleciona o input da barra de busca
const searchBar = document.getElementById('search-bar');

// Adiciona um evento de escuta de teclado para a barra de busca
searchBar.addEventListener('keyup', function(event) {

    // Se a tecla pressionada for o Enter (código 13), executa a função de busca
    if (event.keyCode === 13) {
        search();
    }
});

// Seleciona o botão de busca
const searchButton = document.getElementById('search-btn');

// Adiciona um evento de escuta de clique para o botão de busca
searchButton.addEventListener('click', function() {
    search();
});

// Função de busca
function search() {
    // Seleciona todas as divs com a classe "poema"
    const poemas = document.getElementsByClassName('poema');

    // Seleciona a palavra pesquisada na barra de busca
    const term = searchBar.value.toLowerCase();

    // Itera sobre todas as divs com a classe "poema"
    for (let i = 0; i < poemas.length; i++) {
        // Seleciona o texto da div atual
        const texto = poemas[i].textContent.toLowerCase();

        // Se o texto da div atual incluir a palavra pesquisada, exibe a div
        if (texto.includes(term)) {
            poemas[i].style.display = 'grid';
        } else {
            // Caso contrário, oculta a div
            poemas[i].style.display = 'none';
        }
    }
}
