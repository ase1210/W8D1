import React from 'react';
import {Link} from 'react-router-dom';


const SignedIn = ({logout, currUser}) => (
  <div>
    <span>Hello, {currUser.username}</span>
    <br />
    <button onClick={logout}>LOG OUT</button>
  </div> 
)

const SignedOut = (props) => (
  <div>
    <Link to='/login' >Sign In</Link>
    <br />
    <Link to='/signup' >Sign Up</Link>
  </div>
)

class Header extends React.Component {
  render () {
    return (
      <div>
        {this.props.currentUser 
        ? 
        <SignedIn currUser={this.props.currentUser} logout={this.props.logout}/>
        : 
        <SignedOut />
        }
      </div>
    )
  }
}

export default Header;