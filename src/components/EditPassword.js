import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {profilePage} from "../utils/Constants";
import {Redirect} from "react-router";

const EditPassword = props => {
    const [passwords, setPasswords] = useState({
        password: '',
        passwordCheck: ''
    });
    const [error, setError] = useState('');

    const submitForm = () => {
        if (!passwords.password) {
            setError('Please fill all fields');
        } else if (passwords.password !== passwords.passwordCheck) {
            setError('Passwords do not match');
        } else {
            props.changePassword(passwords.password);
        }
    };

    const localUser = JSON.parse(localStorage.getItem('user'));

    if (localUser) {
        return (
            <div>
                <form className='form-group'>
                    <label>
                        Enter new password:
                        <input
                            value={passwords.password}
                            onChange={event => setPasswords({...passwords, password: event.target.value})}
                            type='text'
                            className='form-control'
                            placeholder='Password'
                        />
                    </label>
                    <br/>
                    <label>
                        Re-enter new password:
                        <input
                            value={passwords.passwordCheck}
                            onChange={event => setPasswords({...passwords, passwordCheck: event.target.value})}
                            type='text'
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
                        className='btn btn-primary'>SUBMIT
                    </button>
                    <Link to={`/${profilePage}`} className='btn btn-danger'>BACK</Link>
                </div>
            </div>
        );
    } else {
        return <Redirect to={'/home'}/>;
    }
};

export default EditPassword;