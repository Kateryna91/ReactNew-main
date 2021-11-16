import { LOGIN, LOGOUT, REGISTER, REGISTER_BEGIN, 
    REGISTER_FAILED } from "../constants/actionTypes";
import authService from "../services/auth.service"
import jwt from 'jsonwebtoken';
import setAuthorizationToken from "../utils/setAuthorizationToken";

export const RegisterUser = (model) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_BEGIN});
        const result = await authService.register(model);
        const token = result.data.token;
        console.log("register reuslt", result);
        dispatch({type: REGISTER});
        localStorage.authToken = token;
        dispatch(authUser(token));
        return Promise.resolve(result);
        
    }
    catch(err) {
        const {data} = err.response;
        //console.log("register error", );
        dispatch({type: REGISTER_FAILED});
        
        //console.log("Propblem register");
        return Promise.reject(data);
    }
}

export const LoginUser = (model) => async (dispatch) => {
    try{
        const result = await authService.login(model);
        const token = result.data.token;
        localStorage.authToken = token;
        dispatch(authUser(token));
        return Promise.resolve(token);
    }
    catch(err) {
        return Promise.reject(err.response.data);
    }
}

export const authUser = (token) => (dispatch) => {
    
    var user = jwt.decode(token);
    setAuthorizationToken(token);
    dispatch({type: LOGIN, payload: user});
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('authToken');
    dispatch(
        {
            type: LOGOUT
        }
    );
}
export const isRole = (user, role) => {
    if(Array.isArray(user.roles)) {
        for(let i =0; i < user.roles.length; i++)
        {
            if(user.roles[i]==role)
                return true;
        }
        return false;
    }
    else {
        return user.roles==role;
    }
}