import { ADD_TODO, DELETE_TODO, EDIT_TODO,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_TOKEN
} from "./actionTypes";



export const addTodo = (data) => {
    return (
        {
            type : ADD_TODO,
            payload : data
        }
    )
}
export const deleteTodo = (id) => {
    return (
        {
            type : DELETE_TODO,
            payload : id
        }
    )
}

export const addTodoLoading = () => {
    return (
        {
            type : ADD_TODO_LOADING
        }
    )
}

export const addTodoError = (error) => {
    return (
        {
            type : ADD_TODO_ERROR,
            payload : error
        }
    )
}


export const addTodoSuccess = (data) => {
    return (
        {
            type : ADD_TODO_SUCCESS,
            payload : data
        }
    )
}

export const getTodoSuccess = (data) => {
    return (
        {
            type : GET_TODO_SUCCESS,
            payload : data
        }
    )
}

export const getTodoLoading = () => {
    return (
        {
            type : GET_TODO_LOADING
        }
    )
}

export const getTodoError = (error) => {
    return (
        {
            type : GET_TODO_ERROR,
            payload : error
        }
    )
}









