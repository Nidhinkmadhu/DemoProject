import {ADD_USER_DATA, INITIAL_STATE} from './action';

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        userData: action.data,
      };
  }

  return state;
};

export default reducer;
