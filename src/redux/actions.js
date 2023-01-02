import {
    ADD_TODO, DELETE_TODO, CHANGE_ACTIVITY, CHANGE_EDITING_STATUS,
    ON_SUBMIT_EDIT_INPUT, CHANGE_DATA_BUTTON_ACTIVITY, DELETE_UNACTIVE, REMOVE_LIST,
    FILL_TODO_LIST, ADD_LOGIN, DELETE_LOGIN, REMOVE_STATE
} from "./types";

let login  = '';
export function addTodo(text, id) {
    return {
        type: ADD_TODO,
        text,
        id,
        login
    }
}
export function deleteTodoRed(id) {
    return {
        type: DELETE_TODO,
        id,
        login
    }
}

export function changeActivityRed(id) {
    return {
        type: CHANGE_ACTIVITY,
        id,
        login
    }
}
export function changeEditingStatusRed(id) {
    return {
        type: CHANGE_EDITING_STATUS,
        id,
        login
    }
}
export function onSubmitEditInputRed(id, editText) {
    return {
        type: ON_SUBMIT_EDIT_INPUT,
        id,
        editText,
        login
    }
}
export function changeDataButtonActivityRed(id) {
    return {
        type: CHANGE_DATA_BUTTON_ACTIVITY,
        id,
        login
    }
}
export function deteleUnactiveRed() {
    return {
        type: DELETE_UNACTIVE,
        login
    }
}
export function removeListRed() {
    return {
        type: REMOVE_LIST,
        login
    }
}
export function fillTodoList(todos) {
    return {
        type: FILL_TODO_LIST,
        todos,
        login
    }
}
export function addLogin(log) {
    login = log;
    return {
        type: ADD_LOGIN,
        login
    }
}
export function deleteLogin() {
    login = '';
    return {
        type: DELETE_LOGIN,
    }
}
export function removeState() {
    return {
        type: REMOVE_STATE,
    }
}

