import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Validation from '../Components/Validation'
import '../assets/css/form.css'

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = Validation(values)
    setErrors(errs)
  }
  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div className='form-group'>
          <label htmlFor='name' className='form-label'>Name:</label>
          <input type='text' placeholder='Enter Name' className='form-control' name='name' onChange={handleInput}/>
          {
            errors.name && <span className='error'>{errors.name}</span>
          }
      </div>
      <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email:</label>
          <input type='email' placeholder='Enter Email' className='form-control' name='email' autoComplete='off' onChange={handleInput}/>
          {
            errors.email && <span className='error'>{errors.email}</span>
          }
      </div>
      <div className='form-group'>
          <label htmlFor='password' className='form-label'>Password:</label>
          <input type='text' placeholder='********' className='form-control' name='password' onChange={handleInput}/>
          {
            errors.password && <span className='error'>{errors.password}</span>
          }
      </div>
      <button className='form-btn'>Register</button>
      <p>Already Registered? <Link to='/login'>Login</Link></p>
    </form>
    </div>
  )
}

export default Register
