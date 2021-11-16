import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/auth';
import { push } from 'connected-react-router';

const Header = () => {
    
    const dispatch = useDispatch();

    const {auth, cart} = useSelector(redux => redux);
    const onClickLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        dispatch(push("/"));
    }


    //console.log("Auth user info ", isAuth);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Авто запчастини</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Головна</Link>
                        </li>
                    </ul>

                    {!auth.isAuth ?
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
                                <Link className="nav-link" to="/cart">
                                    <i className="pi pi-shopping-cart" style={ {fontSize: "2rem"}}></i>
                                    {cart.count}
                                </Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/profile">{auth.user.name}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout" onClick={onClickLogout}>Вихід</Link>
                            </li>
                        </ul>
                    }
                    

                </div>
            </div>
        </nav>
    )
}

export default Header
