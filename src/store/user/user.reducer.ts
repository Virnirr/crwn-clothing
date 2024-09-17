// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

import { UserData } from "../../utils/firebase/firebase.utils";
import { AnyAction } from "redux";
import { setCurrentUser } from "./user.action";

export type UserState = {
  currentUser: UserData | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {

  if (setCurrentUser.match(action)) {
      return {
        ...state,
        currentUser: action.payload,
      };
  }
  return state;
};
