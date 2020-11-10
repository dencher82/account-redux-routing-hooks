import React from 'react';
import {Switch, Route} from "react-router-dom";
import {
    editNamePage,
    editPasswordPage,
    homePage,
    loginPage,
    profilePage,
    registerPage,
    removeUserPage
} from "../utils/Constants";
import Home from "./Home";
import Register from "../containers/RegisterContainer";
import Login from "../containers/LoginContainer";
import Profile from "../containers/ProfileContainer";
import EditName from "../containers/EditNameContainer";
import EditPassword from "../containers/EditPasswordContainer";
import RemoveUser from "../containers/RemoveUserContainer";
import ErrorPage from "./ErrorPage";

const Main = () => {
    return (
        <Switch>
            <Route path={['/', `/${homePage}`]} exact component={Home}/>
            <Route path={`/${registerPage}`} exact component={Register}/>
            <Route path={`/${loginPage}`} exact component={Login}/>
            <Route path={`/${profilePage}`} exact component={Profile}/>
            <Route path={`/${editNamePage}`} exact component={EditName}/>
            <Route path={`/${editPasswordPage}`} exact component={EditPassword}/>
            <Route path={`/${removeUserPage}`} exact component={RemoveUser}/>
            <Route component={ErrorPage}/>
        </Switch>
    );
};

export default Main;