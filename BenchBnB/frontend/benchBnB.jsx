import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', ()=> {
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {id: window.currentUser.id}, 
      entities: {users: {[window.currentUser.id]: window.currentUser}}}
  }
  const store = configureStore(preloadedState);
  delete window.currentUser
  window.store = store;
  const groot = document.getElementById('groot');
  ReactDOM.render(<Root store={store} />, groot);
});