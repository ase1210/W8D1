import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logout, login, signup } from '../../actions/session_actions';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
})

const HeaderContainer = connect(mSTP, mDTP)(Header);

export default HeaderContainer;