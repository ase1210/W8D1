import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => ({
  errors: state.errors.sessionErrors,
  formType: 'Sign up'
})

const mDTP = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

const SignupFormContainer = connect(mSTP, mDTP)(SessionForm);

export default SignupFormContainer;