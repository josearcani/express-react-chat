import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Chat App</h3>
      <div className="underline"></div>
      <form>
        <div className="auth__input-container">
          <input
            type="text"
            placeholder="name"
            autoComplete="off"
            className="auth__input input"
            name="name"
          />
          <i className="fa fa-user"></i>
        </div>
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
        <div className="auth__input-container">
          <input
            type="password"
            placeholder="repeat password"
            autoComplete="off"
            className="auth__input input"
            name="password2"
            />
          <i className="fa fa-key"></i>
        </div>
        <button className="btn btn-primary btn-block" type="submit">
          Register
        </button>
        <Link to="/auth/login" className="link">
          Already have an acoount?
        </Link>
      </form>
    </>
  )
}
