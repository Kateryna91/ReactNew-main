
import { USERS_ALL, USERS_DELETED, USERS_EDIT} from "../constants/actionTypes";
import usersService from "../services/users.service";

export const UsersAll = () => async (dispatch) => {
    try {
        const {data} = await usersService.all(); /*Call our func and give data to it*/
        dispatch({type: USERS_ALL, payload: data}); /*Call dispatch and send action to redux*/
        return Promise.resolve(); /*Return ok*/
    } 
    catch (err) {
        return Promise.reject(err.response.data); /*return errors*/
    }
}
export const UserDelete = (id) => async (dispatch) => {
    try {
        const {data} = await usersService.delete(id); /*Call our func and give data to it*/
        dispatch({type: USERS_DELETED, payload: id}); /*Call dispatch and send action to redux*/
        return Promise.resolve(); /*Return ok*/
    } 
    catch (err) {
        return Promise.reject(err.response.data); /*return errors*/
    }
}

export const UserEdit = (id) => async (dispatch) => {
    try {
        const {data} = await usersService.edit(id); /*Call our func and give data to it*/
        dispatch({type: USERS_EDIT, payload: data}); /*Call dispatch and send action to redux*/
        return Promise.resolve(); /*Return ok*/
    } 
    catch (err) {
        return Promise.reject(err.response.data); /*return errors*/
    }
}