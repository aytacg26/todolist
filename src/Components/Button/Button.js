import { createElement } from '../../App/CreatorFunctions/createElement.js';

const Button = (text, func, className) => {
  const btn = createElement(
    'button',
    { onClick: func },
    ['btn', className],
    text
  );

  return btn;
};

export default Button;
