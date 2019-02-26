import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id)
})

const Auth = ({loggedIn, path, component: Component}) => (
  <Route 
    path={path}
    render={ props => (
      loggedIn ? <Redirect to='/' /> : <Component {...props}/>
    )}
    />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth))

const Protected = ({loggedIn, path, component: Component}) => (
  <Route 
    path={path}
    render={ props => {
      return (loggedIn ? <Component {...props} /> : <Redirect to='/login' />
      )}}
    />
)

export const ProtectedRoute = withRouter(connect(mSTP)(Protected))
