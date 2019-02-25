import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', ()=> {
  const store = configureStore();
  window.store = store;
  const groot = document.getElementById('groot');
  ReactDOM.render(<Root store={store} />, groot);
});