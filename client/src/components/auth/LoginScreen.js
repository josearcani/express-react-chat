import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const { dispatch } = useContext(AuthContext);

  const { data: user, handleChange, handleSubmit, errors } = useForm({
    validations: {
      email: {
        pattern: {
          value: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
          message: 'Check your email again'
        }
      },
      password: {
        required: {
          value: true,
          message: 'This is required'
        },
      },
    },
    initialValues: {
      email: 'test1@test.com',
      password: 'secret',
    },
    onSubmit: () => {
      dispatch({ type: 'LOGIN', email: user.email, password: user.password })
    }
  })

  return (
    <>
      <h3 className="auth__title">Chat App</h3>
      <div className="underline"></div>
      <form onSubmit={ handleSubmit }>
        <div className="auth__input-container">
          <input
            type="email"
            placeholder="email"
            autoComplete="off"
            className="auth__input input"
            name="email"
            value={ user.email }
            onChange={ handleChange('email') }
          />
          <i className="fa fa-envelope"></i>
          { errors.email && <span className="auth__input--error">{ errors.email }</span> }
        </div>
        <div className="auth__input-container">
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="auth__input input"
            name="password"
            value={ user.password }
            onChange={ handleChange('password') }
            />
          <i className="fa fa-key"></i>
          { errors.password && <span className="auth__input--error">{ errors.password }</span> }
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
