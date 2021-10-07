import { TOGGLE_DARK_MODE } from "../actions/actionType";


const initialState={
    darkTheme: false
}

const themeReducer = (state=initialState, action) => {
    switch (action.type) {
      case TOGGLE_DARK_MODE:
            if (state.darkMode === true) {
                return {
                    ...state,
                    darkTheme: true,
            }
            } else {
                return {
                    ...state,
                    darkTheme: false
                }
        }

      default:
        return state;
    }
}

export {themeReducer}