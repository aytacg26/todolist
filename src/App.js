import { createElement } from './App/CreatorFunctions/createElement.js';
import useCSS from './App/CreatorFunctions/useCSS.js';
import { loginPageLink, entryPageLink, signUpPageLink } from './Pages/Links.js';
import { DESCRIPTION, TITLE } from './Constants.js';
import ContentContainer from './Components/ContentContainer/ContentContainer.js';
import Navbar from './Components/Navbar/Navbar.js';
import EnteryPage from './Pages/EntryPage.js';

const App = () => {
  useCSS('../src/ToDoApp.css');
  const desc = `Orginize it all with TodoList. Join millions of people who organize
    work and life with Todoist`;

  //   const loginFunc = () => {
  //     const loginPage = createElement('div', null, null, 'Login Page');
  //     const target = document.querySelector('.container');
  //     target.innerHTML = '';
  //     target.appendChild(loginPage);
  //   };

  //   const signUpFunc = () => {
  //     const signUpPage = createElement('div', null, null, 'SignUp Page');
  //     const target = document.querySelector('.container');
  //     target.innerHTML = '';
  //     target.appendChild(signUpPage);
  //   };

  //   const entryPage = () => {
  //     const target = document.querySelector('.container');

  //     if (!target.firstElementChild.classList.contains('login-page')) {
  //       const entery = EnteryPage('TO DO', desc, { loginFunc, signUpFunc });
  //       target.innerHTML = '';
  //       target.appendChild(entery);
  //     }
  //   };

  const entery = EnteryPage(TITLE, DESCRIPTION, {
    loginFunc: loginPageLink,
    signUpFunc: signUpPageLink,
  });

  const Container = ContentContainer(entery);
  const appElements = [Navbar(entryPageLink), Container];

  return createElement('div', null, null, [...appElements]);
};

export default App;
