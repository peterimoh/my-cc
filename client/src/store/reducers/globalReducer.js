import { SET_DARK_MODE } from '../actions/actionType';

const initialState = {
  darkTheme: 'light',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_DARK_MODE:
          console.log(state, action);
          return {
          ...state,
              darkTheme: action.payload,
        
      };
    

    default:
      return state;
  }
};

export { themeReducer };
