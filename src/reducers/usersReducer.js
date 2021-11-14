import { USERS_ALL, USERS_DELETED } from "../constants/actionTypes";

const initialState = {
    list: []
}

const usersReducer = (state=initialState, action) => {
    const {type, payload}=action;
    switch(type) {
        case USERS_ALL: {
            return {
                ...state,
                list: payload
            };
        }
        case USERS_DELETED:{
            return{
                ...state,
                list: state.list.filter(item => item.id !== payload)
            }
        }

        default: {
            return state;
        }
    }
} 

export default usersReducer;