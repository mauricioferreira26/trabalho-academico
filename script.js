// Adiciona um listener que espera todo o conteúdo da página carregar para executar o código.
// Isso evita que o JavaScript tente manipular elementos que ainda não existem.
document.addEventListener('DOMContentLoaded', () => {

    /* =================================================================
       CÓDIGO PARA O CARROSSEL (SLIDESHOW) DE DESTAQUES
    ================================================================= */

    let slideIndex = 0; // Variável que controla qual slide está sendo exibido, começa no primeiro (0)
    showSlides(); // Inicia a função para mostrar os slides assim que a página carrega

    // Função principal que controla a troca de slides
    function showSlides() {
        let slides = document.getElementsByClassName("mySlides"); // Pega todos os elementos com a classe "mySlides"

        // Esconde todos os slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++; // Incrementa o índice para passar para o próximo slide

        // Se o índice passar do número total de slides, ele volta para o primeiro (1)
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Exibe o slide atual. O '-1' é porque arrays em JS começam em 0.
        slides[slideIndex - 1].style.display = "block";

        // Define um temporizador para chamar a função showSlides novamente após 4 segundos (4000 milissegundos)
        // Isso cria o efeito de transição automática
        setTimeout(showSlides, 8000);
    }

    // Estas funções são chamadas pelos botões de seta no HTML (onclick)
    // Elas permitem a navegação manual. Como o escopo mudou, precisamos anexá-las
    // ao objeto window para que fiquem acessíveis globalmente.

    // Função para avançar ou retroceder os slides
    window.plusSlides = function(n) {
      // Limpa o timeout anterior para evitar trocas automáticas e manuais conflitantes
      // Embora a lógica atual não precise disso, é uma boa prática para carrosséis mais complexos
      manualShowSlides(slideIndex += n);
    }

    // Função para mostrar um slide específico manualmente
    function manualShowSlides(n) {
      let slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) { slideIndex = 1 } // Se for para frente além do último, volta ao primeiro
      if (n < 1) { slideIndex = slides.length } // Se for para trás antes do primeiro, vai para o último

      // Esconde todos os slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      // Mostra o slide correto
      slides[slideIndex-1].style.display = "block";
    }

    /* =================================================================
       CÓDIGO PARA OS BOTÕES DE ROLAGEM HORIZONTAL
    ================================================================= */

    // Seleciona todos os containers de fileira da página
    const rowContainers = document.querySelectorAll('.row-container');

    // Itera sobre cada container encontrado
    rowContainers.forEach(container => {
        // Encontra a grade de itens e as duas setas DENTRO do container atual
        const itemsGrid = container.querySelector('.items-grid');
        const leftArrow = container.querySelector('.left-arrow');
        const rightArrow = container.querySelector('.right-arrow');

        // Adiciona um "ouvinte" de evento de clique na seta direita
        rightArrow.addEventListener('click', () => {
            // Ao clicar, a posição de rolagem horizontal da grade (scrollLeft)
            // é aumentada, movendo o conteúdo para a esquerda.
            // O valor 300 pode ser ajustado para rolar mais ou menos.
            itemsGrid.scrollLeft += 300;
        });

        // Adiciona um "ouvinte" de evento de clique na seta esquerda
        leftArrow.addEventListener('click', () => {
            // Ao clicar, a posição de rolagem horizontal é diminuída,
            // movendo o conteúdo de volta para a direita.
            itemsGrid.scrollLeft -= 300;
        });
    });
});