export const ADD_USER_DATA = 'ADD_USER_DATA';
export const INITIAL_STATE = {
  userData: {},
};

export function addUserData(data) {
  return {
    type: ADD_USER_DATA,
    data,
  };
}
