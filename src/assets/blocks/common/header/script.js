const headerScript = (() => {
  /* Variables */

  const body          = document.querySelector('body'),
        burgerBtn     = document.querySelector('.burger-btn'),
        burgerMenu    = document.querySelector('.burger-menu'),

        headerNav     = document.querySelector('.header-nav'),
        headerNavList = document.querySelector('.header-nav__list'),
        headerNavLink = document.querySelectorAll('.header-nav__link'),
        header        = document.querySelector('.header'),
        headerCont    = document.querySelector('.header__cont'),
        headerSocial  = document.querySelector('.header-social');

  let header_flag = 1;



  /* Functions */

  // Teleport onResize function
  const headerTeleport = () => {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if ((viewportWidth < 991) && (header_flag === 1)) {
      header_flag = 0;
      appendElem(headerNavList, burgerMenu);
      appendElem(headerSocial, burgerMenu);
    }

    if ((viewportWidth > 991) && (header_flag === 0)) {
      header_flag = 1;
      appendElem(headerNavList, headerNav);
      appendElem(headerSocial, headerCont);
      hideBurgerMenu();
    }
  }

  // Burger menu

  const hideBurgerMenu = () => {
    body.classList.remove('fixed');
    burgerBtn.classList.remove('active');
    burgerMenu.classList.add('transition');
    burgerMenu.classList.add('hidden')
  }

  const initBurgerMenu = () => {
    burgerBtn.addEventListener('click', e => {
      body.classList.toggle('fixed');
      burgerBtn.classList.toggle('active');
      burgerMenu.classList.toggle('active');

      if (burgerMenu.classList.contains('hidden')) {
        // show
        burgerMenu.classList.add('transition');
        burgerMenu.clientWidth;
        burgerMenu.classList.remove('hidden')
      } else {
        // hide
        burgerMenu.classList.add('transition');
        burgerMenu.classList.add('hidden')
      }
    });

    burgerMenu.addEventListener('transitionend', () =>
      burgerMenu.classList.remove('transition'));

    [].forEach.call(headerNavLink, navLink => {
      navLink.addEventListener('click', e => hideBurgerMenu())
    })
  }



  /* Execution of functions */

  viewportWidth < 991 ?
    appendElem(headerNavList, burgerMenu) :
    appendElem(headerNavList, headerNav);

  initBurgerMenu();

  return {
    headerTeleport: headerTeleport
  }
})();
