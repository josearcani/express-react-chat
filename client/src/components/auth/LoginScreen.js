import React from 'react';

export const LoginScreen = () => {
  return (
    <div>
      <form>
        <label>Login
          <input
            type="email"
            placeholder="email"
            autoComplete="off"
            name="email"
          />
          <i class="fa fa-user"></i>
        </label>
        <label>Password
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            name="password"
          />
          <i class="fa fa-key"></i>
        </label>

        <a href="/">Forgot your password?</a>
        <button className="btn">
          Login
        </button>
      </form>
    </div>
  )
}
