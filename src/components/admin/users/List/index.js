import React from 'react'
import { useSelector } from 'react-redux';

const ListUsers = () => {
    var auth = useSelector(redux => redux.auth);



    return (
        <>
            <h1>Адмін панель користувачі</h1>
        </>
    );
}
export default ListUsers;
