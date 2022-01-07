import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const { data: user, handleChange, handleSubmit, errors } = useForm({
    validations: {
      name: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: 'Do not use special characters',
        },
      },
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
        custom: {
          isValid: (value) => value.length > 5,
          message: 'Needs to be at least 6 characters'
        },
      },
    },
    initialValues: {
      name: 'josh',
      email: 'test1@test.com',
      password: 'secret',
    },
    onSubmit: () =>  <Redirect to="/auth/login" />
  });

  return (
    <>
      <h3 className="auth__title">Chat App</h3>
      <div className="underline"></div>
      <form onSubmit={ handleSubmit }>
        <div className="auth__input-container">
          <input
            type="text"
            placeholder="name"
            autoComplete="off"
            className="auth__input input"
            name="name"
            value={ user.name || '' }
            onChange={ handleChange('name') }
            />
          <i className="fa fa-user"></i>
          { errors.name && <span className="auth__input--error">{errors.name}</span> }
        </div>
        <div className="auth__input-container">
          <input
            type="email"
            placeholder="email"
            autoComplete="off"
            className="auth__input input"
            name="email"
            value={ user.email || '' }
            onChange={ handleChange('email') }
          />
          <i className="fa fa-envelope"></i>
          { errors.email && <span className="auth__input--error">{errors.email}</span> }
        </div>
        <div className="auth__input-container">
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="auth__input input"
            name="password"
            value={ user.password || '' }
            onChange={ handleChange('password') }
            />
          <i className="fa fa-key"></i>
          { errors.password && <span className="auth__input--error">{errors.password}</span> }
        </div>
        <button className="btn btn-primary btn-block" type="submit">
          Register
        </button>
        <Link to="/auth/login" className="link">
          Already have an account?
        </Link>
      </form>
    </>
  )
}
