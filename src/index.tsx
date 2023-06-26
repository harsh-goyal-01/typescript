import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-app-polyfill/stable';
import { IntlProvider } from 'react-intl';
import English from './languages/en.json';
import Spanish from './languages/es.json';

let lang;
const local=navigator.language;
if(local==="en-US")
{
  lang=English;
}
else{
  lang=Spanish;
}

const rootElement= document.getElementById('root');

ReactDOM.render(
  <IntlProvider locale={local} messages={lang}>
    <App />
    </IntlProvider>,
  rootElement
);

reportWebVitals(console.log);
