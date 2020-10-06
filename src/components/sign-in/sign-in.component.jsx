import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttton.component';

import './sign-in.styles.scss';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setuserCredentials] = useState({ email: '', password: '' })

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = userCredentials;

    emailSignInStart(email, password);
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setuserCredentials({ ...userCredentials, [name] : value });
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="Email" 
          value={userCredentials.email}
          handleChange={handleChange} 
          type="email"
          required
        />
        <FormInput
          name="password"
          label="Password" 
          value={userCredentials.password}
          handleChange={handleChange} 
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


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);