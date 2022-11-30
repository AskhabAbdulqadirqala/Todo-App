import { ADD_TODO, DELETE_TODO, CHANGE_ACTIVITY, CHANGE_EDITING_STATUS,
    ON_SUBMIT_EDIT_INPUT, CHANGE_DATA_BUTTON_ACTIVITY, DELETE_UNACTIVE,
    REMOVE_LIST,
} from "./types"

const initialState = {todos: []};

export const TodoAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:  [...state.todos, {id: action.id, text: action.text,
                    activity: true, isEditing: false,
                    createdDate: new Date().toJSON(),
                    lastEditDate: false,
                    isDataButtonActive: false,
                }]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.id)
            }
        case CHANGE_ACTIVITY:
            return {
                ...state,
                todos: state.todos.map((item) => {
                    return (item.id !== action.id) ? item : {...item, activity: !item.activity}
                })
            }
        case CHANGE_EDITING_STATUS:
            return {
                ...state,
                todos: state.todos.map((item) => (item.id !== action.id) ? item : {...item, isEditing: !item.isEditing}
                )
            }
        case ON_SUBMIT_EDIT_INPUT:
            return {
                ...state,
                todos: state.todos.map((item) => (item.id !== action.id) ? item :
                    {...item, text: action.editText, isEditing: false, lastEditDate: new Date().toJSON()}
                )
            }
        case CHANGE_DATA_BUTTON_ACTIVITY:
            return {
                ...state,
                todos: state.todos.map((item) => (item.id !== action.id) ? item :
                    {...item, isDataButtonActive: !item.isDataButtonActive}
                )
            }
        case DELETE_UNACTIVE:
            return {
                ...state,
                todos: state.todos.filter((item) => item.activity)
            }
        case REMOVE_LIST:
            return {
                ...state,
                todos: []
            }
        default:
            return state;
    }

}