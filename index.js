
   $(document).ready(function() {
  // Oculta todos os popups inicialmente
  $('.popup').hide();
  
  // Função para abrir o popup
  $('.select-item a').click(function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    var target = $(this).attr('href'); // Obtém o destino do link
    $('.popup').hide(); // Oculta todos os popups
    $(target).show(); // Exibe o popup correspondente
    
    // Esconde todos os botões
    $('.select-item').hide();
    
    // Atualiza a imagem de fundo da área de seleção
    var itemId = $(this).parent().attr('id');
    var backgroundImage = getItemBackgroundImage(itemId);
    $('.select-area').css('background-image', backgroundImage);
    $('.select-area').css('background-size', 'cover');
    $('.select-area').css('min-height', '35rem');
    $('.select-area').css('background-position', 'center');
  });

  // Função para fechar o popup ao clicar fora dele
  $('.popup-content').click(function(e) {
    e.stopPropagation(); // Impede a propagação do evento
  });
  
  $('.popup').click(function(e) {
    if ($(e.target).hasClass('popup-content')) {
      return;
    }
    
    $(this).hide(); // Oculta o popup ao clicar fora
    
    // Exibe todos os botões novamente
    $('.select-item').show();
    
    // Volta a imagem de fundo da área de seleção ao normal
    $('.select-area').css('background-image', '');
    $('.select-area').css('background-size', '');
    $('.select-area').css('min-height', '');
  });
});

const selectItems = document.querySelectorAll('.select-item');

        // Adiciona o evento de clique para adicionar a classe 'clicked'
        selectItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove a classe 'clicked' de todos os outros itens
                selectItems.forEach(innerItem => innerItem.classList.remove('clicked'));
                
                // Adiciona a classe 'clicked' ao item clicado
                item.classList.add('clicked');
            });
        });

        selectItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove a classe 'clicked' de todos os outros itens
      selectItems.forEach(innerItem => innerItem.classList.remove('clicked'));
      
      // Adiciona a classe 'clicked' ao item clicado
      item.classList.add('clicked');
    });
  });

// Helper function to get the background image for each item
function getItemBackgroundImage(itemId) {
  switch (itemId) {
    case 'select-item1':
      return 'url(./img/fig2.jpg)';
    case 'select-item2':
      return 'url(./img/fig6.jpg)';
    case 'select-item3':
      return 'url(./img/fig7.jpg)';
    case 'select-item4':
      return 'url(./img/fig3.jpg)';
    case 'select-item5':
      return 'url(./img/fig4.jpg)';
    case 'select-item6':
      return 'url(./img/fig5.jpg)';
    default:
      return '';
  }
}

selectItems.forEach(item => {
  item.addEventListener('click', function() {
    // Chame a função que irá aplicar os estilos do circular1
    applyCircular1Styles();
  });
});
