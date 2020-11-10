import React from 'react';
import {loginPage, registerPage} from "../utils/Constants";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

const Home = () => {

    const redirect = localStorage.getItem('redirect');

    if (redirect) {
        return <Redirect to={redirect}/>
    } else {
        return (
            <div>
                <Link to={`/${loginPage}`} className='btn btn-info'>LOGIN</Link>
                <Link to={`/${registerPage}`} className='btn btn-info'>REGISTER</Link>
            </div>
        );
    }
};

export default Home;