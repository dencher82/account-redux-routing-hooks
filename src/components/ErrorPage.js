import React from 'react';
import {Link} from "react-router-dom";
import {homePage} from "../utils/Constants";

const ErrorPage = () => {
    return (
        <div>
            <h1>Page not found!</h1>
            <Link to={`/${homePage}`} className='btn btn-info'>GO TO HOME PAGE</Link>
        </div>
    );
};

export default ErrorPage;