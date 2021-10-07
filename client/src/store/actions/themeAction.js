import { SET_DARK_MODE, SET_LIGHT_MODE } from './actionType';

const DarkTheme = () => async (dispatch) => {
  return dispatch({ type: SET_DARK_MODE });
};

const LightTheme = () => async (dispatch) => {
  return dispatch({ type: SET_LIGHT_MODE });
};

export { DarkTheme, LightTheme };
