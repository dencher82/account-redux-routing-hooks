import React, {useState} from 'react';
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {profilePage} from "../utils/Constants";

const RemoveUser = props => {

    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const submitForm = () => {
        if (!password) {
            setError('Please enter a password');
        } else {
            props.deleteUser(password);
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
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type='text'
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
                        className='btn btn-primary'>SUBMIT
                    </button>
                    <Link to={`/${profilePage}`} className='btn btn-danger'>BACK</Link>
                </div>
                <div>
                    <p>{props.error}</p>
                </div>
            </div>
        );
    } else {
        return <Redirect to={'/home'}/>;
    }
};

export default RemoveUser;