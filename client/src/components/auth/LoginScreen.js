import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Chat App</h3>
      <div className="underline"></div>
      <form>
        <div className="auth__input-container">
          <input
            type="email"
            placeholder="email"
            autoComplete="off"
            className="auth__input input"
            name="email"
          />
          <i className="fa fa-envelope"></i>
        </div>
        <div className="auth__input-container">
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="auth__input input"
            name="password"
            />
          <i className="fa fa-key"></i>
        </div>

        <a href="/" className="link mb-1">Forgot your password?</a>
        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  )
}
