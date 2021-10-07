import { SET_DARK_MODE, SET_LIGHT_MODE } from '../actions/actionType';

const initialState = {
  darkTheme: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        darkTheme: true,
      };
    case SET_LIGHT_MODE:
      return {
        darkTheme: false,
      };

    default:
      return state;
  }
};

export { themeReducer };
