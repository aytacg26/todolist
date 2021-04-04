import { createElement } from '../../App/CreatorFunctions/createElement.js';

const NavbarElement = (func) => {
  const navMenuSection = createElement('div', null, 'nav-menu');
  const img = createElement('img', {
    src: '../../../public/images/todologo-min.png',
    onClick: func,
  });
  const navLogoArea = createElement('div', null, 'nav-logo', [img]);
  const navContainer = createElement('div', null, 'nav-bar', [
    navLogoArea,
    navMenuSection,
  ]);

  return navContainer;
};

export default NavbarElement;
