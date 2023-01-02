import { ADD_LOGIN, DELETE_LOGIN
} from "./types"

const initialState = {login: ''};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOGIN:
            return {
                ...state,
                login: action.login
            }
        case DELETE_LOGIN:
            return {
                ...state,
                login: ''
            }
        default:
            return state;
    }
}