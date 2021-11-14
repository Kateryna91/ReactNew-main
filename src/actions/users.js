import { USERS_ALL, USERS_DELETED, USERS_EDIT } from "../constants/actionTypes";
import usersService from "../services/users.service";

export const UsersAll = () => async (dispatch) => {
    try{
        const {data} = await usersService.all();
        dispatch({type: USERS_ALL, payload: data});
        return Promise.resolve();
    }
    catch(err) {
        return Promise.reject(err.response.data);
    }
}

export const UsersDelete = (id) => async (dispatch) => {
    try{
        const {data} = await usersService.delete(id);
        dispatch({type: USERS_DELETED, payload: id});
        return Promise.resolve();
    }
    catch(err) {
        return Promise.reject(err.response.data);
    }
}

export const UsersEdit = (id) => async (dispatch) => {
    try{
        const {data} = await usersService.edit(id);
        dispatch({type: USERS_EDIT, payload: data});
        return Promise.resolve();
    }
    catch(err) {
        return Promise.reject(err.response.data);
    }
}