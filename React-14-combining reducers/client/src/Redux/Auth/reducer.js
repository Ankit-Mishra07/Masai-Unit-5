import { loadData , saveData} from "../../utils/localStorage";
import { GET_TOKEN , LOGOUT} from "./actionType";

const init = {
    token : loadData("auth") || []
}

export const reducer = (state=init, {type, payload}) => {
    switch(type) {
        case GET_TOKEN:
            const updatedtoken = [...state.token ,payload]
            saveData("auth", updatedtoken)
            return {
                ...state,
                token : updatedtoken
            }
        case LOGOUT : 
        saveData("auth", payload)
        return {
            token : payload
        }
        default :
        return state
    }
}




