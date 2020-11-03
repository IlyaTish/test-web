(() => {
  /* Variables */

  const popups     = document.querySelectorAll('.popup'),
        popupLinks = document.querySelectorAll('.popup-link'),
        popupCont  = document.querySelector('.popup__cont');



  /* Functions */

  const popupInit = () => {
    [].forEach.call(popups, popupElem => {
      document.addEventListener('click', e => {
        const isClickInside = popupCont.contains(e.target);

        if (!isClickInside && popupElem.classList.contains('active'))
          popupElem.classList.remove('active')
      })
    });

    [].forEach.call(popupLinks, link => {
      const linkHref = link.getAttribute('href').replace('#', '');

      link.addEventListener('click', () => {
        setTimeout(() => {
          popups.forEach(popupElem => {
            if (popupElem.getAttribute('id') === linkHref) {
              const btnClose = popupElem.querySelector('.btn-close'),
                    popupBg  = popupElem.querySelector('.popup-bg');

              popupElem.classList.add('active');

              btnClose.addEventListener('click', () => popupElem.classList.remove('active'));
              popupBg.addEventListener('click', () => popupElem.classList.remove('active'))
            }
          })
        })
      })
    })
  }



  /* Functions execution */

  popupInit()
})();