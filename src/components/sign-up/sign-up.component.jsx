import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttton.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';


const SignUp = ({ signUpStart,  }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const {displayName, email, password, confirmPassword} = userCredentials;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserCredentials({ ...userCredentials, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    } 
    
    signUpStart({ email, password, displayName });
  }

  return (
    <div className="sign-up" onSubmit={handleSubmit}>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and a password</span>
      <form className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);