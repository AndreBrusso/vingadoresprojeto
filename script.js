function ininitTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabcontent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabcontent.length) {
    tabcontent[0].classList.add('ativo');

    function activeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove('ativo');
      })
      tabcontent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function(){
        activeTab(index);
      });
    });
  }
}
ininitTabNav();

// Curiosidades

function ininitCuriosidades() {
  const curiosidadesList = document.querySelectorAll('.js-curiosidades dt');
  curiosidadesList[0].classList.add('ativo');
  curiosidadesList[0].nextElementSibling.classList.add('ativo')

  function activeCuriosidades() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  curiosidadesList.forEach((item) => {
    item.addEventListener('click', activeCuriosidades);
  })
}
ininitCuriosidades();