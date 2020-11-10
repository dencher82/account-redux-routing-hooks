import {base_url, homePage, profilePage} from "../utils/Constants";

export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const saveUserAction = user => ({
    type: SAVE_USER,
    payload: user
});

export const clearUserAction = () => ({
    type: DELETE_USER,
    payload: ''
});

export const authErrorAction = () => ({
    type: AUTH_ERROR,
    payload: 'Data is not correct'
})

const redirect = redirectUrl => {
    window.location = redirectUrl;
};

export const registerAction = user => {
    return (dispatch) => {
        fetch(`${base_url}/user`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                dispatch(saveUserAction(data));
                const credentials = window.btoa(user.login + ':' + user.password);
                const encodedData = `Basic ${credentials}`;
                localStorage.setItem('credentials', encodedData);
                localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('redirect', '/profile');
                redirect(`/${profilePage}`);
            })
            .catch(e => console.log(e));
    }
};

export const loginAction = user => {
    const credentials = window.btoa(user.login + ':' + user.password);
    const encodedData = `Basic ${credentials}`;
    return (dispatch) => {
        fetch(`${base_url}/login`, {
            method: 'POST',
            headers: {'Authorization': encodedData}
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 401) {
                    dispatch(authErrorAction());
                    throw new Error('' + response.status);
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                dispatch(saveUserAction(data));
                localStorage.setItem('credentials', encodedData);
                localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('redirect', '/profile');
                redirect(`/${profilePage}`);
            })
            .catch(e => console.log(e));
    }
};

export const logoutAction = () => {
    localStorage.removeItem('credentials');
    localStorage.removeItem('user');
    localStorage.removeItem('redirect');
    return (dispatch) => {
        redirect(`/${homePage}`);
    }
};

export const editNameAction = user => {
    const encodedData = localStorage.getItem('credentials');
    return (dispatch) => {
        fetch(`${base_url}/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': encodedData
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                dispatch(saveUserAction(data));
                localStorage.setItem('user', JSON.stringify(data));
                redirect(`/${profilePage}`);
            })
            .catch(e => console.log(e));
    }
}

export const changePasswordAction = password => {
    const encodedData = localStorage.getItem('credentials');
    return (dispatch) => {
        fetch(`${base_url}/user/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': encodedData,
                'X-Password': password
            }
        })
            .then(response => {
                if (response.ok) {
                    const login = JSON.parse(localStorage.getItem('user')).login;
                    const credentials = window.btoa(login + ':' + password);
                    const encodedData = `Basic ${credentials}`;
                    localStorage.setItem('credentials', encodedData);
                    redirect(`/${profilePage}`);
                } else if (response.status === 401) {
                    dispatch(logoutAction());
                } else {
                    throw new Error('' + response.status);
                }
            })
            .catch(e => console.log(e));
    }
}

export const deleteUserAction = password => {
    const login = JSON.parse(localStorage.getItem('user')).login;
    const credentials = window.btoa(login + ':' + password);
    const encodedData = `Basic ${credentials}`;
    return (dispatch) => {
        fetch(`${base_url}/user`, {
            method: 'DELETE',
            headers: {
                'Authorization': encodedData,
            }
        })
            .then(response => {
                if (response.ok) {
                    dispatch(logoutAction());
                } else if (response.status === 401) {
                    dispatch(authErrorAction());
                    throw new Error('' + response.status);
                } else {
                    throw new Error('' + response.status);
                }
            })
            .catch(e => console.log(e));
    }
}