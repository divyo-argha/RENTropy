// import React from 'react';
// import '../../App.css';

// export default function SignUp() {
//   return <h1 className='sign-up'>Create New Account</h1>;
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Signing up with:', { email, password });
  };
  const handleSignUp = () => {
    // Placeholder for sign-up logic
    console.log('Signing up with:', { email, password });
  };

  const handleGoogleSignIn = () => {
    // Placeholder for Google sign-in logic
    console.log('Signing in with Google');
  };

  const handleFacebookSignIn = () => {
    // Placeholder for Facebook sign-in logic
    console.log('Signing in with Facebook');
  };

  return (
    <div className='home-container'>
        <h2>Sign Up to </h2>
        <h1>RENTropy <i className="fab fa-typo3" /></h1>
        
    
    <div className="sign-in-container">
      <h2>Sign Up</h2>
      <form className="form-container">
      <div className="form-group">
        <label>Email:</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
        />
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
            />
        </div>
        <div className="form-group">
            <button type="button" onClick={handleSignUp}>
            Sign Up
            </button>
            {/* <span> or </span>
            <button type="button" onClick={handleSignUp}>
            Sign Up
            </button> */}
        </div>
        <div className="form-group">
            <p className='sign-er-bhugichugi'>Or sign up with:</p>
            <button className="fb-button" type="button" onClick={handleGoogleSignIn}>
                Sign up with <i class='fab fa-facebook' />
            </button>

            <button className='google-button' type="button" onClick={handleFacebookSignIn}>
                Sign up with <i class='fab fa-google' />
            </button>
        </div>
        <div className='form-group'>
            <p className='sign-er-bhugichugi'><i>Already have an account?</i></p>
            <button className='sign-up-button' type="button" onClick={handleSignIn}>
                <Link to='/log-in'>
                    Sign in
                </Link>
            </button>
            
        </div>
        
      </form>
    </div>
    </div>
  );
};

export default SignUp;





