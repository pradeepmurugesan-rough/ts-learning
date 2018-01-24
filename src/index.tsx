import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { enthusiasm } from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// tslint:disable-next-line:no-string-literal
// const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
// tslint:disable-next-line:no-any
const store: any = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
},
  // tslint:disable-next-line:align
  applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
