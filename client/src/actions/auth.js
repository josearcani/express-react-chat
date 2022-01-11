import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2';

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
    return Swal.fire('Error', msg, 'error');
    
  },
  REGISTER: ({ dispatch }) => async ({ name, email, password }) => {
    console.warn('For now you can use the test user provided');
    // const { user, token , msg } = await fetchWithoutToken('register', { name, email, password}, 'POST')
    // if (user) {
    //   localStorage.setItem('token', token );
    //   dispatch(login(user));
    //   return
    // }
    // return console.log(msg);
  }
};