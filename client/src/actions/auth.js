import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

export const login = (user) => ({
  type: types.login,
  payload: user
})

export const logout = () => ({
  type: types.logout
})

export const asyncActionHandlers = {
  LOGIN: ({ dispatch }) => async ({ email, password }) => {
    const { user, token, msg } = await fetchWithoutToken('auth/login', { email, password }, 'POST');
    // console.log(user,msg)
    if (user) {
      localStorage.setItem('token', token );
      dispatch(login(user));
      return
    }
    return console.log(msg);
    
  },
  REGISTER: ({ dispatch }) => async (action) => {

  }
};