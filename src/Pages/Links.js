import { createElement } from '../App/CreatorFunctions/createElement.js';
import EnteryPage from './EntryPage.js';
import { DESCRIPTION, TITLE } from '../Constants.js';

//CREATE LOGIN PAGE: LOGIN FORM
export const loginPageLink = () => {
  console.log('Login Page Link');
  const loginPage = createElement('div', null, null, 'Login Page');
  const target = document.querySelector('.container');
  target.innerHTML = '';
  target.appendChild(loginPage);
};

//CREATE SIGN UP PAGE : SIGN UP FORM
export const signUpPageLink = () => {
  const signUpPage = createElement('div', null, null, 'SignUp Page');
  const target = document.querySelector('.container');
  target.innerHTML = '';
  target.appendChild(signUpPage);
};

export const entryPageLink = () => {
  const target = document.querySelector('.container');

  if (!target.firstElementChild.classList.contains('login-page')) {
    const entery = EnteryPage(TITLE, DESCRIPTION, {
      loginFunc: loginPageLink,
      signUpFunc: signUpPageLink,
    });
    target.innerHTML = '';
    target.appendChild(entery);
  }
};

export const accountPageLink = () => {};
export const dashboardPageLink = () => {};
export const todoListPageLink = (listId) => {};
