import { createElement } from '../App/CreatorFunctions/createElement.js';
import Button from '../Components/Button/Button.js';

const EnteryPage = (title, description, { ...func }) => {
  const { loginFunc, signUpFunc } = func;

  const Login = Button('Login', loginFunc, 'btn-success');
  const SignUp = Button('Sign Up', signUpFunc, 'btn-todo');

  const img = createElement('img', {
    src:
      '../../public/images/businessman-meditating-get-calm-flat-vector_81522-550.jpg',
    alt: 'businessman meditating get calm',
  });

  const H1 = createElement('h1', null, null, title);
  const titleDiv = createElement('div', null, 'login-title-section', [H1]);
  const desc = createElement('p', null, null, description);
  const descDiv = createElement('div', null, 'login-description', [desc]);
  const btnArea = createElement('div', null, 'button-area', [Login, SignUp]);

  const entryPage = createElement('div', null, 'login-page', [
    img,
    titleDiv,
    descDiv,
    btnArea,
  ]);

  return entryPage;
};

export default EnteryPage;
