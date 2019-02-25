import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, signup, logout } from './actions/session_actions';

window.login = login;
window.signup = signup;
window.logout = logout;




document.addEventListener('DOMContentLoaded', ()=> {
  const store = configureStore();
  window.store = store;
  const groot = document.getElementById('groot');
  ReactDOM.render(<Root store={store} />, groot);
});