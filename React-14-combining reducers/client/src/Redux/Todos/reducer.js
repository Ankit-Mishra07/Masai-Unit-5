import { loadData, saveData ,deleteData} from "../../utils/localStorage";
import { ADD_TODO, DELETE_TODO, EDIT_TODO,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_TOKEN
} from "./actionTypes";

const initialState = {
    loading : false,
    todo : loadData("todo") || [],
    error : false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_TODO : 
        const updatedTodo = [...state.todo, payload]
        saveData("todo", updatedTodo)
        return {
            ...state,
            todo : updatedTodo
        }
        case ADD_TODO_LOADING :
            return {
                ...state,
                loading : true
            }
        case ADD_TODO_SUCCESS :
            return {
                ...state,
                loading : false
            }
        
        case ADD_TODO_ERROR :
            return {
                ...state,
                loading : false,
                error : true
            }
        case GET_TODO_LOADING :
            return {
                ...state,
                loading : true
            }
        case GET_TODO_SUCCESS : 
            return {
                ...state,
                todo : [...state.todo, payload],
                loading : false
            }
        case GET_TODO_ERROR : 
            return {
                ...state,
                loading : false,
                error : false
            }
        case DELETE_TODO : 
        let updatetodo = deleteData("todo", payload)
        return {
            ...state,
            todo : updatetodo
        }

        

        default :
        return state
    }
}