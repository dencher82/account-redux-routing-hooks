import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {homePage} from "../utils/Constants";
import {Redirect} from "react-router";

const Login = props => {
    const [user, setUser] = useState({
        login: '',
        password: ''
    });
    const [error, setError] = useState('');

    const submitForm = () => {
        if (!user.login || !user.password) {
            setError('Please fill all fields');
        } else {
            props.login(user);
        }
    };

    const redirect = localStorage.getItem('redirect');

    if (redirect) {
        return <Redirect to={redirect}/>
    } else {
        return (
            <div>
                <form className='form-group'>
                    <label>
                        Enter login:
                        <input
                            value={user.login}
                            onChange={event => setUser({...user, login: event.target.value})}
                            type='text'
                            className='form-control'
                            placeholder='Login'
                        />
                    </label>
                    <br/>
                    <label>
                        Enter password:
                        <input
                            value={user.password}
                            onChange={event => setUser({...user, password: event.target.value})}
                            type='password'
                            className='form-control'
                            placeholder='Password'
                        />
                    </label>
                </form>
                <div>
                    <p>{error}</p>
                </div>
                <div>
                    <button
                        onClick={submitForm}
                        className='btn btn-primary'>LOGIN
                    </button>
                    <Link to={`/${homePage}`} className='btn btn-danger'>CANCEL</Link>
                </div>
                <div>
                    <p>{props.error}</p>
                </div>
            </div>
        );
    }
};

export default Login;