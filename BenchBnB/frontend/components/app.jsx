import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';


const App = () => (
  <div>
    <div>
      <h1>Welcome to BenchBnB!</h1>
      <HeaderContainer/>
    </div>
    <h1>MAIN SECTION</h1>
    <Route exact path='/signup' component={SignupFormContainer}/>
    <Route exact path='/login' component={LoginFormContainer}/>
  </div>
)

export default App;