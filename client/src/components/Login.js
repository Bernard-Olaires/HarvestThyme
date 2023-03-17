import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import useAuth from '../hooks/useAuth';
import './LoginReg.css'

const Login = (props) => {
    const {setAuth} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', user, { withCredentials: true })
            .then((res) => {
                const accessToken = res?.data?.accessToken;
                setAuth({user:res.data.user, accessToken});
                navigate(from, {replace:true});
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data)
            })
    }
    return (
        <div className='container'>
            <div className='login'>
                <form onSubmit={submitHandler} className='login-form'>
                    <label className='form-label'>Email:</label>
                    <input type="text" name="email" className='form-control' onChange={onChangeHandler} value={user.email} />

                    <label className='form-label'>Password:</label>
                    <input type="password" name="password" className='form-control' onChange={onChangeHandler} value={user.password} />
                    {
                        errors?<p className='errors'>{errors.message}</p>:null
                    }
                    <button className='btn btn-dark border mt-3'>Login</button>
                    <br />
                    <Link className='text-white' to={'/register'}>Dont have an account? Sign up here</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
