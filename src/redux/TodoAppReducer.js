import { ADD_TODO, DELETE_TODO, CHANGE_ACTIVITY, CHANGE_EDITING_STATUS,
            ON_SUBMIT_EDIT_INPUT, CHANGE_DATA_BUTTON_ACTIVITY, DELETE_UNACTIVE,
            REMOVE_LIST, FILL_TODO_LIST, REMOVE_STATE
} from "./types"


const initialState = {todos: []};
let newTodos;

export const todoAppReducer = (state = initialState, action) => {

    let login = action.login;

    function serverUpdate(newTD){
        login && fetch('http://localhost:5000/data/update', {
            method: 'PATCH',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({username: login, todos: newTD})
        })
    }

    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state.todos, {id: action.id, text: action.text,
                activity: true, isEditing: false,
                createdDate: new Date().toJSON(),
                lastEditDate: false,
                isDataButtonActive: false,
            }];
            serverUpdate(newTodos);
            return {
                ...state,
                todos:  newTodos
            }

        case DELETE_TODO:
            newTodos = state.todos.filter((item) => item.id !== action.id);
            serverUpdate(newTodos)
            return {
                ...state,
                todos: newTodos
            }
        case CHANGE_ACTIVITY:
            newTodos = state.todos.map((item) => {
                return (item.id !== action.id) ? item : {...item, activity: !item.activity}
            });
            serverUpdate(newTodos)
            return {
                ...state,
                todos: newTodos
            }
        case CHANGE_EDITING_STATUS:
            newTodos = state.todos.map((item) => (item.id !== action.id) ? item : {...item, isEditing: !item.isEditing}
            );
            serverUpdate(newTodos);
            return {
                ...state,
                todos: newTodos
            }
        case ON_SUBMIT_EDIT_INPUT:
            newTodos = state.todos.map((item) => (item.id !== action.id) ? item :
                {...item, text: action.editText, isEditing: false, lastEditDate: new Date().toJSON()});
            serverUpdate(newTodos);
            return {
                ...state,
                todos: newTodos
            }
        case CHANGE_DATA_BUTTON_ACTIVITY:
            newTodos = state.todos.map((item) => (item.id !== action.id) ? item :
                {...item, isDataButtonActive: !item.isDataButtonActive}
            );
            serverUpdate(newTodos);
            return {
                ...state,
                todos: newTodos
            }
        case DELETE_UNACTIVE:
            newTodos = state.todos.filter((item) => item.activity);
            serverUpdate(newTodos);
            return {
                ...state,
                todos: newTodos
            }
        case REMOVE_LIST:
            newTodos = [];
            serverUpdate(newTodos);
            return {
                ...state,
                todos: newTodos
            }
        case REMOVE_STATE:
            return {
                ...state,
                todos: [],
            }
        case FILL_TODO_LIST:
            newTodos = action.todos;
            serverUpdate(newTodos);
            return {
                ...state,
                todos: newTodos
            }
        default:
            return state;
    }
}