import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './page/home';
import About from './page/about';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';


const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f 
));

// store.dispatch(getCharacters());

const data = [
  {
    id: 1,
    title: 'Artical one',
    content: 'artical one content',
  },
  {
    id: 2,
    title: 'Artical two',
    content: 'artical two content',
  },
  {
    id: 3,
    title: 'Artical three',
    content: 'artical three content',
  },
  {
    id: 4,
    title: 'Artical four',
    content: 'artical four content',
  }
];

require('./index.html');

// Create app
const container = document.querySelector('#app-container');

// Render app
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  </Provider>
  , container
);
