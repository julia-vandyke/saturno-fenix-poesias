// Código que funcinou:

$(document).ready(function() {
  // Filtrar os poemas por tópico quando um botão é clicado
  $('.topic-btn').on('click', function(event) {
    event.preventDefault(); // Impede que o comportamento padrão do link seja acionado
    var topic = $(this).data('topic');
    if (topic === 'todos') {
      $('.poema').show();
    } else {
      $('.poema').hide();
      $('.poema[data-topics*="' + topic + '"]').show();
    }
  });

  // Ativar o botão de tópico correto na barra de navegação
  $('.nav-item').on('click', function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
  });

  // Filtrar os poemas por tópico quando um botão na barra de navegação é clicado
  $('.nav-item').on('click', function(event) {
    event.preventDefault(); // Impede que o comportamento padrão do link seja acionado
    var topic = $(this).data('topic');
    if (topic === 'todos') {
      $('.poema').show();
    } else {
      $('.poema').hide();
      $('.poema[data-topics*="' + topic + '"]').show();
    }
  });

  // Filtrar os poemas por tópico quando o botão de filtro na página do blog é clicado
  $('.blog-topic').on('click', function(event) {
    event.preventDefault(); // Impede que o comportamento padrão do botão seja acionado
    var topic = $(this).data('topic');
    if (topic === 'todos') {
      $('.poema').show();
    } else {
      $('.poema').hide();
      $('.poema[data-topics*="' + topic + '"]').show();
    }
  });
});



// Código que não funcionou:

/**
$(document).ready(function () {
  window.onload = function () {
    // Função para filtrar os poemas de acordo com o tópico selecionado
    function filterPoemsByTopic(topic) {
      const allPoems = document.querySelectorAll(".poema"); // Obter todos os poemas
      allPoems.forEach((poem) => {
        const poemTopics = poem.dataset.topic.split(" "); // Obter os tópicos do poema como uma matriz de palavras-chave
        if (poemTopics.includes(topic)) {
          // Verificar se o tópico selecionado corresponde aos tópicos do poema
          poem.classList.add("show"); // Adicionar a classe 'show' ao poema para mostrá-lo
        } else {
          poem.classList.remove("show"); // Remover a classe 'show' do poema para ocultá-lo
        }
      });
    }

    // Adicionar eventos de clique aos botões de tópicos
    const topicButtons = document.querySelectorAll(".topic-btn");
    topicButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const topic = button.querySelector("p").textContent; // Obter o tópico do botão clicado
        filterPoemsByTopic(topic); // Filtrar os poemas de acordo com o tópico selecionado
      });
    });

    // Adicionar eventos de clique aos itens do menu de navegação
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        const topic = item.querySelector("a").textContent; // Obter o tópico do item de menu clicado
        filterPoemsByTopic(topic); // Filtrar os poemas de acordo com o tópico selecionado
      });
    });

    // Adicionar eventos de clique aos botões de tópicos na página do blog
    const blogTopicButtons = document.querySelectorAll(".blog-topic");
    blogTopicButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const topic = button.textContent.trim(); // Obter o tópico do botão clicado
        filterPoemsByTopic(topic); // Filtrar os poemas de acordo com o tópico selecionado
      });
    });
  };
});
*/
