import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';


class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = async (event) => {
    const { signUpStart } = this.props;
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    } 

    signUpStart({ email, password, displayName });
  }

  render(){
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up" onSubmit={this.handleSubmit}>
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and a password</span>
        <form className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);