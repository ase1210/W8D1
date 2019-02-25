import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleInput(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)  
  }

  render(){
    const errors = this.props.errors.map((error, idx) => (<p key={idx}>{error}</p>))
    return (
      <div>
        {errors}
        <form onClick={this.props.clearErrors} onSubmit={this.handleSubmit}>
          <label>Username:
            <input 
              type="text" 
              onChange={this.handleInput('username')} 
              value={this.state.username}
            />
          </label>
          <label>Password:
            <input 
              type="password" 
              onChange={this.handleInput('password')} 
              value={this.state.password}
            />
          </label>
            <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;