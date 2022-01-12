import {createStore, combineReducers} from 'redux';

import {reducer as TodoReducer} from "../Todos/reducer"
import {reducer as AuthReducer} from "../Auth/reducer"

const rootReducer = combineReducers({
    todoState : TodoReducer,
    AuthState : AuthReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )