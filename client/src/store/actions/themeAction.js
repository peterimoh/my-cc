import { SET_DARK_MODE, SET_LIGHT_MODE } from './actionType';

const DarkTheme = (mode) => {
  return { type: SET_DARK_MODE, payload: mode };
};

// const LightTheme = () => async (dispatch) => {
//   return dispatch({ type: SET_LIGHT_MODE });
// };

export { DarkTheme };
