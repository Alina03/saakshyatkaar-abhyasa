import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        full_name: newUser.full_name,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log(res)
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data.token)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

