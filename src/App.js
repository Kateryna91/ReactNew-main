import './App.css';
import React, {Suspense} from 'react';
import LoginPage from "./components/auth/Login/LoginPage";
import RegisterPage from "./components/auth/Register/RegisterPage";
import EditPage from "./components/edit";
import Navbar from "./components/Navbar";
// const DefaultLayout = React.lazy(()=>import('./components/containers/DefaultLayout'));
// const AdminLayout = React.lazy(()=>import('./components/containers/AdminLayout'));

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./components/home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/register">
            <RegisterPage />
          </Route>

          <Route exact path="/user/edit/:id">
            <EditPage />
          </Route>
          {/* <Route path="/admin" name="Admin" render={props=> <AdminLayout {...props}/>} />
            <Route path="/" name="Default" render={props=> <DefaultLayout {...props}/>} />
          */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
