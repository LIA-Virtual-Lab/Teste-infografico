// Selecione os elementos que você deseja que abram o popup
const selectItems = document.querySelectorAll('.select-item');

// Store the original background image
const selectArea = document.querySelector('.select-area');
const originalBackgroundImage = selectArea.style.backgroundImage;

// Adicione um evento de clique a cada elemento
selectItems.forEach((item) => {
  item.addEventListener('click', function() {
    // Selecione o popup correspondente ao item clicado
    const popupId = item.querySelector('a').getAttribute('href');
    const popup = document.querySelector(popupId);

    // Abra o popup
    popup.style.display = 'block';

    // Update the background image of the select area
    const backgroundImage = getItemBackgroundImage(item.id);
    selectArea.style.backgroundImage = backgroundImage;
    selectArea.style.backgroundSize = 'cover';
    selectArea.style.minHeight = '35rem';
    selectArea.style.backgroundPosition = 'center';

    // Apply focus effect to the clicked item
    selectItems.forEach((innerItem) => {
      if (innerItem !== item) {
        innerItem.style.opacity = 0;  // Reduce opacity of other items
        innerItem.style.display = 'none';
      } else {
        innerItem.style.opacity = 1;
        innerItem.style.filter = 'none';
        innerItem.classList.add('focus');
      }
    });
  });

  item.addEventListener('click', () => {
    // Apply hover effect to the item
    selectItems.forEach((innerItem) => {
      if (innerItem !== item) {
        innerItem.style.opacity = 0;  // Reduce opacity of other items
        innerItem.classList.remove('focus');
      } else {
        innerItem.style.opacity = 1;

      }
    });
  });

  item.addEventListener('click', () => {
    // Não faça nada aqui, pois queremos que a opacidade só volte ao normal quando outro botão for clicado
  });
});

// Selecione os popups
const popups = document.querySelectorAll('.popup');

// Adicione um evento de clique a cada popup
popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (!event.target.closest('.popup-content')) {
      popup.style.display = 'none';
      selectArea.style.backgroundImage = originalBackgroundImage;
      selectArea.style.backgroundSize = '';
      selectArea.style.minHeight = '';

      // Volte a opacidade dos botões ao normal
      selectItems.forEach((item) => {
        item.style.opacity = 10;
        item.style.display = 'block';
      });
    }
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
