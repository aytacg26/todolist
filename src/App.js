import { createElement } from './App/CreatorFunctions/createElement.js';
import useCSS from './App/CreatorFunctions/useCSS.js';
import { loginPageLink, entryPageLink, signUpPageLink } from './Pages/Links.js';
import { DESCRIPTION, TITLE } from './Constants.js';
import ContentContainer from './Components/ContentContainer/ContentContainer.js';
import Navbar from './Components/Navbar/Navbar.js';
import EnteryPage from './Pages/EntryPage.js';

const App = () => {
  useCSS('../src/ToDoApp.css');

  const entery = EnteryPage(TITLE, DESCRIPTION, {
    loginFunc: loginPageLink,
    signUpFunc: signUpPageLink,
  });

  const Container = ContentContainer(entery);
  const appElements = [Navbar(entryPageLink), Container];

  return createElement('div', null, null, [...appElements]);
};

export default App;
