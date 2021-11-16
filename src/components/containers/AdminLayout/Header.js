import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { push } from 'connected-react-router';

const Header = () => {
    
    const dispatch = useDispatch();

    const {isAuth, username} = useSelector(redux => redux.auth);



    //console.log("Auth user info ", isAuth);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/admin">Адмін панель</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/admin">Адімін панель</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/admin/users">Користувачі</Link>
                        </li>
                    </ul>

                    {/* {!isAuth ?
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Вхід</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Реєструватися</Link>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav">
                             <li className="nav-item">
                                <Link className="nav-link" to="/profile">{username}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout" >Вихід</Link>
                            </li>
                        </ul>
                    } */}
                    

                </div>
            </div>
        </nav>
    )
}

export default Header
