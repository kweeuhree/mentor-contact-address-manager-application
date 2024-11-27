import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Validation from '../Components/Validation'
import '../assets/css/form.css'
import axios from 'axios'
import {toast} from 'react-toastify'

// Define the Register component
const Register = () => {
    // Initialize state for form values, errors, and server errors
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  // React Hook
  const [errors, setErrors] = useState({})
  const [serverErrors, setServerErrors] = useState([])
    // Handle input changes in the form
  const handleInput = (event) => {
     // Update the form values state with the new input value
    setValues({...values, [event.target.name]: event.target.value})
  }  // Handle form submission
  const handleSubmit = (e) => {
     // Prevent the default form submission behavior
    e.preventDefault()
     // Validate the form values using the custom Validation component
    const errs = Validation(values)
    setErrors(errs)
    // If there are no errors, make a POST request to the server to register the user
    if(errors.name === '' && errors.email === '' && errors.password === '') {
      axios.post('http://127.0.0.1:3000/capstone/register', values)
      .then(res => {
       // Display a success toast notification if the registration is successful
        toast.success("Account Created Successfully", {
          position: "top-right",
          autoClose: 5000,
        })
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
        <h2>Create Account</h2>
        <div className='form-group'>
          <label htmlFor='name' className='form-label'>Name:</label>
          <input type='text' placeholder='Enter Name' className='form-control' name='name' onChange={handleInput}/>
          {
           // Display error message if the name field has an error
            errors.name && <span className='error'>{errors.name}</span>
          }
      </div>
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
             // Display server error messages if there are any
            serverErrors.length > 0 && (
              serverErrors.map((error, index) => (
                <p className='error' key={index}>{error.msg}</p>
              ))
            )
          }
      </div>
      <button className='form-btn'>Register</button>
      <p>Already Registered? <Link to='/login'>Login</Link></p>
    </form>
    </div>
  )
}

export default Register
