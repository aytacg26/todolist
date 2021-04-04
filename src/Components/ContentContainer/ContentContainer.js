import { createElement } from '../../App/CreatorFunctions/createElement.js';

const ContentContainer = (...childElements) => {
  const contentContainer = createElement(
    'div',
    null,
    'container',
    childElements
  );

  return contentContainer;
};

export default ContentContainer;
