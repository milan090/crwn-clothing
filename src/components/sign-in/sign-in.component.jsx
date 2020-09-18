import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttton.component';

import './sign-in.styles.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    
    const { email, password } = this.state;
    
    try {
      this.setState({ password: '' });
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '' });
    } catch (error) {
      console.error(error);
    }
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
          
          <div className="buttons">
            <CustomButton type="submit" >Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
          </div>
        </form>
        
      </div>
    )
  }
}


export default SignIn;