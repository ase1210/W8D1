import React from 'react';
import { Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { BenchIndex } from './bench/bench_index';



const App = () => (
  <div>
    <div>
      <h1>Welcome to BenchBnB!</h1>
      <HeaderContainer/>
    </div>
    <h1>MAIN SECTION</h1>
    <Switch>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
      <ProtectedRoute path='/' component={BenchIndex}/>
    </Switch>
  </div>
)

export default App;