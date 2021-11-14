import { REGISTER } from "../constants/actionTypes";
import { LOGIN } from "../constants/actionTypes";
import { LOGOUT } from "../constants/actionTypes";

const initialState = {
    isAuth: false,
    user: {}
}

const authReducer = (state=initialState, action) => {
    const {type, payload}=action;
    // console.log ('payload', payload)

    switch(type){
case REGISTER:{    

    return {
        isAuth: false
    }
}
case LOGIN:{    

    return {
        isAuth: true,
        user: payload

    }
}

case LOGOUT: {
    return {
        isAuth: false
    }
}

        default: {
            return state;
        }
    }
}

export default authReducer;