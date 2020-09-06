import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttton.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  }

  handleChange = event => {
      this.setState({ [event.target.name] : event.target.value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
 
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email" 
            value={this.state.email}
            handleChange={this.handleChange} 
            type="email"
            required
          />
          <FormInput
            name="password"
            label="Password" 
            value={this.state.password}
            handleChange={this.handleChange} 
            type="password"
            required
          />
          

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
        
      </div>
    )
  }
}


export default SignIn;