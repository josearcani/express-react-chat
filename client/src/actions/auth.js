import { types } from "../types/types";

export const login = (user) => ({
  type: types.login,
  payload: {
    name: user.name,
    email: user.email,
    img: user.img,
    uid: user.uid
  }
})

export const logout = () => ({
  type: types.logout
})
