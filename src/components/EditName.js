import React, {useState} from 'react';
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {profilePage} from "../utils/Constants";

const EditName = props => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: ''
    });
    const [error, setError] = useState('');

    const submitForm = () => {
        if (!user.firstName || !user.lastName) {
            setError('Please fill all fields');
        } else {
            props.editName(user);
        }
    };

    const localUser = JSON.parse(localStorage.getItem('user'));

    if (localUser) {
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
        return <Redirect to={'/home'}/>
    }
};

export default EditName;