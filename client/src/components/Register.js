import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import useAuth from '../hooks/useAuth';
import './LoginReg.css'
const Register = () => {
    const {setAuth} = useAuth()
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState({})

    const onChangeHandler = (e)=>{
        setNewUser({...newUser, [e.target.name]:e.target.value})
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', newUser, {withCredentials:true})
            .then((res)=>{
                const accessToken = res?.data?.accessToken;
                setAuth({user:res.data.user, accessToken});
                navigate('/')
            })
            .catch((err)=>{
                setErrors(err.response.data.error.errors)
            })
    }
    return (
        <div className='container'>
            <div className="login">
                <form onSubmit={submitHandler} className='login-form'>
                <label className='form-label'>First Name:</label>
                <input type="text" name="firstName" className='form-control' onChange={onChangeHandler} value={newUser.firstName}/>
                {
                    errors.firstName?<p className='errors'>{errors.firstName.message}</p>:null
                }
                <label className='form-label'>Last Name:</label>
                <input type="text" name="lastName" className='form-control' onChange={onChangeHandler} value={newUser.lastName}/>
                {
                    errors.lastName?<p className='errors'>{errors.lastName.message}</p>:null
                }
                <label className='form-label'>Email:</label>
                <input type="email" name="email" className='form-control' onChange={onChangeHandler} value={newUser.email}/>
                {
                    errors.email?<p className='errors'>{errors.email.message}</p>:null
                }
                <label className='form-label'>Password:</label>
                <input type="password" name="password" className='form-control' onChange={onChangeHandler} value={newUser.password}/>
                {
                    errors.password?<p className='errors'>{errors.password.message}</p>:null
                }
                <label className='form-label'>Confirm Password:</label>
                <input type="password" name="confirmPassword" className='form-control' onChange={onChangeHandler} value={newUser.confirmPassword}/>
                {
                    errors.confirmPassword?<p className='errors'>{errors.confirmPassword.message}</p>:null
                }
                <button className='btn btn-dark border mt-3'>Register</button>
                <br />
                <Link className='text-white' to={'/login'}>Already have an account? Login here</Link>
                </form>
            </div>
        </div>
    );
}

export default Register;
