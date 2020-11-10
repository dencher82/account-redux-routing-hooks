import React from 'react';
import {editNamePage, editPasswordPage, removeUserPage} from "../utils/Constants";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

const Profile = props => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        return (
            <div>
                <div>
                    <p>First name: {user.firstName}</p>
                    <p>Last name: {user.lastName}</p>
                    <p>Login: {user.login}</p>
                    <p>Roles: {user.roles}</p>
                </div>
                <div>
                    <Link to={`/${editNamePage}`} className='btn btn-info'>EDIT USER</Link>
                    <Link to={`/${editPasswordPage}`} className='btn btn-info'>CHANGE PASSWORD</Link>
                    <Link to={`/${removeUserPage}`} className='btn btn-danger'>DELETE USER</Link>
                    <button
                        onClick={props.logout}
                        className='btn btn-primary'>LOGOUT
                    </button>
                </div>
            </div>
        );
    } else {
        return <Redirect to={'/home'}/>
    }
};

export default Profile;