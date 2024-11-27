import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Validation from '../Components/Validation'
import '../assets/css/form.css'
import axios from 'axios'
import {toast} from 'react-toastify'


const Login = () => {
  // React Hooks
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [serverErrors, setServerErrors] = useState([])
  // Handle input changes in the form
  const handleInput = (event) => {
    // Update the form values state with the new input value
    setValues({...values, [event.target.name]: event.target.value})
  }
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate the form values using the custom Validation component
    const errs = Validation(values)
    setErrors(errs)
    // If there are no errors, make a POST request to the server to login the user
    if(errors.email === '' && errors.password === '') {
      axios.post('http://127.0.0.1:3000/capstone/login', values)
      .then(res => {
         // Display a success toast notification if the login is successful
        toast.success("Logged InSuccessfully", {
          position: "top-right",
          autoClose: 5000,
        })
        // Navigate to the home page after successful login
        Navigate('/')
      }).catch(err => {
        // Handle server errors
        if(err.response.data.errors) {
          setServerErrors(err.response.data.errors)
        } else {
          console.log(err)
        }
      })
    }
  }
  // Render the form
  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Login</h2>
       
      <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email:</label>
          <input type='email' placeholder='Enter Email' className='form-control' name='email' autoComplete='off' onChange={handleInput}/>
          {
            // Display error message if the email field has an error
            errors.email && <span className='error'>{errors.email}</span>
          }
      </div>
      <div className='form-group'>
          <label htmlFor='password' className='form-label'>Password:</label>
          <input type='password' placeholder='********' className='form-control' name='password' onChange={handleInput}/>
          {
            // Display error message if the password field has an error
            errors.password && <span className='error'>{errors.password}</span>
          }
          {
            serverErrors.length > 0 && (
              // Display server error messages if there are any
              serverErrors.map((error, index) => (
                <p className='error' key={index}>{error.msg}</p>
              ))
            )
          }
      </div>
      <button className='form-btn'>Login</button>
      <p>Don't Have an Account? <Link to='/register'>Register</Link></p>
    </form>
    </div>
  )
}

export default Login;
