import React, {useState} from 'react';
import {homePage} from "../utils/Constants";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

const Register = props => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        login: '',
        password: '',
        passwordCheck: ''
    });
    const [error, setError] = useState('');

    const submitForm = () => {
        if (!user.firstName || !user.lastName || !user.login || !user.password) {
            setError('Please fill all fields');
        } else if (user.password !== user.passwordCheck) {
            setError('Passwords do not match');
        } else {
            props.register(user);
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
                        Enter first name:
                        <input
                            value={user.firstName}
                            onChange={event => setUser({...user, firstName: event.target.value})}
                            type='text'
                            className='form-control'
                            placeholder='First name'
                        />
                    </label>
                    <br/>
                    <label>
                        Enter last name:
                        <input
                            value={user.lastName}
                            onChange={event => setUser({...user, lastName: event.target.value})}
                            type='text'
                            className='form-control'
                            placeholder='Last name'
                        />
                    </label>
                    <br/>
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
                    <br/>
                    <label>
                        Re-enter password:
                        <input
                            value={user.passwordCheck}
                            onChange={event => setUser({...user, passwordCheck: event.target.value})}
                            type='password'
                            className='form-control'
                            placeholder='Repeat password'
                        />
                    </label>
                </form>
                <div>
                    <p>{error}</p>
                </div>
                <div>
                    <button
                        onClick={submitForm}
                        className='btn btn-primary'>REGISTER
                    </button>
                    <Link to={`/${homePage}`} className='btn btn-danger'>CANCEL</Link>
                </div>
            </div>
        );
    }
};

export default Register;