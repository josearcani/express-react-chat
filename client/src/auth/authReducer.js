import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
        checking: false,
      }
    case types.logout:
      return {
        logged: false,
        checking:false,
      }
    default:
      return state
  }
}
