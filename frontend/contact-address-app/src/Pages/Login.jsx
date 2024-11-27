import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Validation from '../Components/Validation'
import '../assets/css/form.css'
import axios from 'axios'
import {toast} from 'react-toastify'


const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [serverErrors, setServerErrors] = useState([])
  const handleInput = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = Validation(values)
    setErrors(errs)
    if(errors.email === '' && errors.password === '') {
      axios.post('http://127.0.0.1:3000/capstone/register', values)
      .then(res => {
        toast.success("Account Created Successfully", {
          position: "top-right",
          autoClose: 5000,
        })
      }).catch(err => {
        if(err.response.data.errors) {
          setServerErrors(err.response.data.errors)
        } else {
          console.log(err)
        }
      })
    }
  }
  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Login</h2>
       
      <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email:</label>
          <input type='email' placeholder='Enter Email' className='form-control' name='email' autoComplete='off' onChange={handleInput}/>
          {
            errors.email && <span className='error'>{errors.email}</span>
          }
      </div>
      <div className='form-group'>
          <label htmlFor='password' className='form-label'>Password:</label>
          <input type='password' placeholder='********' className='form-control' name='password' onChange={handleInput}/>
          {
            errors.password && <span className='error'>{errors.password}</span>
          }
          {
            serverErrors.length > 0 && (
              serverErrors.map((error, index) => (
                <p className='error' key={index}>{error.msg}</p>
              ))
            )
          }
      </div>
      <button className='form-btn'>Register</button>
      <p>Don't Have an Account? <Link to='/register'>Register</Link></p>
    </form>
    </div>
  )
}

export default Login
