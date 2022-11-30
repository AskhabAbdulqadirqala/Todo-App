import { ADD_TODO, DELETE_TODO, CHANGE_ACTIVITY, CHANGE_EDITING_STATUS,
    ON_SUBMIT_EDIT_INPUT, CHANGE_DATA_BUTTON_ACTIVITY, DELETE_UNACTIVE, REMOVE_LIST,
} from "./types";


export function addTodoRed(text, id) {
    return {
        type: ADD_TODO,
        text,
        id,
    }
}
export function deleteTodoRed(id) {
    return {
        type: DELETE_TODO,
        id,
    }
}

export function changeActivityRed(id) {
    return {
        type: CHANGE_ACTIVITY,
        id,
    }
}
export function changeEditingStatusRed(id) {
    return {
        type: CHANGE_EDITING_STATUS,
        id,
    }
}
export function onSubmitEditInputRed(id, editText) {
    return {
        type: ON_SUBMIT_EDIT_INPUT,
        id,
        editText,
    }
}
export function changeDataButtonActivityRed(id) {
    return {
        type: CHANGE_DATA_BUTTON_ACTIVITY,
        id,
    }
}
export function deteleUnactiveRed() {
    return {
        type: DELETE_UNACTIVE,
    }
}
export function removeListRed() {
    return {
        type: REMOVE_LIST,
    }
}