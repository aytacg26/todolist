import { createElement } from './createElement.js';

const useCSS = (fileLocation) => {
  const head = document.getElementsByTagName('head');
  const link = createElement('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: fileLocation,
  });

  head[0].append(link);
};

export default useCSS;
