import React, { useState } from 'react';
import './sign-in.styles.css';
import useInput from '../../hooks/useInput';
import FormInput from '../form-input/form-input.component';
const SignIn = () => {
  const [email, handleEmailChange, resetEmail] = useInput('');
  const [password, handlePasswordChange, resetPassword] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        {email}
        {password}
        <FormInput
          type="email"
          name="email"
          defaultValue={email}
          handleChange={handleEmailChange}
          required
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          defaultValue={password}
          handleChange={handlePasswordChange}
          required
          label="password"
        />
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
