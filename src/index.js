import React from 'react';
import ReactDOM from 'react-dom';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
