import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
  errors: state.errors.sessionErrors,
  formType: 'Login'
})

const mDTP = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

const LoginFormContainer = connect(mSTP, mDTP)(SessionForm);

export default LoginFormContainer;