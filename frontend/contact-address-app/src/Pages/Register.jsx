import React from 'react'
import '../assets/css/form.css'

const Register = () => {
  return (
    <div className='form-container'>
      <form className='form'>
        <h2>Create Account</h2>
        <div className='form-group'>
          <label htmlFor='name' className='form-label'>Name:</label>
          <input type='text' placeholder='Enter Name' className='form-control' name='name'/>
      </div>
      <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email:</label>
          <input type='email' placeholder='Enter Email' className='form-control' name='email' autoComplete='off'/>
      </div>
      <div className='form-group'>
          <label htmlFor='password' className='form-label'>Password:</label>
          <input type='text' placeholder='********' className='form-control' name='password'/>
      </div>
      <button className='form-btn'>Register</button>
      {/* <p>Already Registered? <Link to='/login'>Login</Link></p> */}
    </form>
    </div>
  )
}

export default Register
