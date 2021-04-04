export const createElement = (tag, props, className, childElements) => {
  const element = document.createElement(tag);
  //some of the events ommitted for this exercise
  const events = [
    'onblur',
    'onclick',
    'ondblclick',
    'onfocus',
    'onmousedown',
    'onmouseenter',
    'onmouseleave',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onselect',
    'onchange',
  ];

  //Set attributes of the element
  if (props) {
    if (typeof props === 'object' && !Array.isArray(props)) {
      const propKeys = Object.keys(props);

      propKeys.forEach((propKey) => {
        if (
          (events.includes(propKey.toLowerCase()) ||
            propKey.substring(0, 2).toLowerCase() === 'on') &&
          typeof props[propKey] === 'function'
        ) {
          element.addEventListener(
            `${propKey.substring(2).toLowerCase()}`,
            props[propKey]
          );
        } else {
          element.setAttribute(propKey, props[propKey]);
        }
      });
    } else {
      console.error(
        `For ${tag}, props must be an object type but a ${typeof props} entered.`
      );
    }
  }

  //Add class or classes to element to be created
  if (className) {
    if (typeof className === 'string') {
      element.classList.add(className);
    } else if (typeof className === 'object' && Array.isArray(className)) {
      className.forEach((cn) => {
        element.classList.add(cn);
      });
    } else {
      console.error(
        `For ${tag}, a string class name or an array of string class names expected`
      );
    }
  }

  //add child elements to element to be created
  if (childElements) {
    if (typeof childElements === 'object' && Array.isArray(childElements)) {
      childElements.forEach((childEl) => {
        if (typeof childEl === 'object') {
          element.appendChild(childEl);
        } else if (typeof childEl === 'string') {
          element.innerText = childEl;
        }
      });
    } else if (
      typeof childElements === 'object' &&
      !Array.isArray(childElements)
    ) {
      element.appendChild(childElements);
    } else if (typeof childElements === 'string') {
      element.innerText = childElements;
    } else {
      console.error(
        `For ${tag}, childElements must be an object created by createElement or an array of element objects`
      );
    }
  }

  return element;
};
