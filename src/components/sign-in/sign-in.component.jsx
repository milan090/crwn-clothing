import React from 'react'
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttton.component';

import './sign-in.styles.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  }

  handleChange = event => {
      this.setState({ [event.target.name] : event.target.value });
  }

  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with google</CustomButton>
          </div>
        </form>
        
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);