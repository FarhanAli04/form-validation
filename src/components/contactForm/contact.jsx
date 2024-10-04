import React, { useState } from 'react';
import './contact.css'; 

const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [userErrors, setUserErrors] = useState({
    firstNameErr: false,
    lastNameErr: false,
    emailErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {
      firstNameErr: false,
      lastNameErr: false,
      emailErr: false,
      passwordErr: false,
      confirmPasswordErr: false,
    };
    let isError = false;

    if (userDetails.firstName === '') {
      errors.firstNameErr = true;
      isError = true;
    }
    if (userDetails.lastName === '') {
      errors.lastNameErr = true;
      isError = true;
    }
    if (userDetails.email === '') {
      errors.emailErr = true;
      isError = true;
    }
    if (userDetails.password === '') {
      errors.passwordErr = true;
      isError = true;
    }
    if (userDetails.confirmPassword === '') {
      errors.confirmPasswordErr = true;
      isError = true;
    } else if (userDetails.password !== userDetails.confirmPassword) {
      errors.confirmPasswordErr = true;
      isError = true;
    }

    setUserErrors(errors);

    if (!isError) {
      console.log('Form submitted successfully:', userDetails);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            value={userDetails.firstName}
            onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
            style={{ border: userErrors.firstNameErr ? '3px solid red' : '' }}
          />
          {userErrors.firstNameErr && (
            <span className="text-danger">First name is required</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            value={userDetails.lastName}
            onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
            style={{ border: userErrors.lastNameErr ? '3px solid red' : '' }}
          />
          {userErrors.lastNameErr && (
            <span className="text-danger">Last name is required</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            style={{ border: userErrors.emailErr ? '3px solid red' : '' }}
          />
          {userErrors.emailErr && (
            <span className="text-danger">Email is required</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            style={{ border: userErrors.passwordErr ? '3px solid red' : '' }}
          />
          {userErrors.passwordErr && (
            <span className="text-danger">Password is required</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={userDetails.confirmPassword}
            onChange={(e) => setUserDetails({ ...userDetails, confirmPassword: e.target.value })}
            style={{ border: userErrors.confirmPasswordErr ? '3px solid red' : '' }}
          />
          {userErrors.confirmPasswordErr && (
            <span className="text-danger">Passwords must match</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
