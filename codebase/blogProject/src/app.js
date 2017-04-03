import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './page/home';
import About from './page/about';
import PostDetail from './page/post-detail';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';


const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f 
));

require('./index.html');

// Create app
const container = document.querySelector('#app-container');

// Render app
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/posts/:id" component={PostDetail} />
    </Router>
  </Provider>
  , container
);
