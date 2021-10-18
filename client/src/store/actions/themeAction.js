import { SET_DARK_MODE } from './actionType';

const DarkTheme = (mode) => {
  return { type: SET_DARK_MODE, payload: mode };
};


export { DarkTheme };
