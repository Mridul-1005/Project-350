import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

const Register = () => {
  return (<Wrapper>
   <form className="form">
    <Logo />
<h4>Register</h4>
<FormRow type="text" name="name" defaultValue='Mridul'/>
<FormRow type="text" name="lastName" labelText='last name' defaultValue='Hasan'/>
<FormRow type="text" name="location" defaultValue='earth'/>
<FormRow type="email" name="email" defaultValue='mridul@gmail.com'/>
<FormRow type="password" name="password" defaultValue='secret123'/>
<button type='submit' className='btn btn-block'>
Submit
</button>
<p>Already have an account? <Link to='/login' className='member-btn'>Login</Link></p>
   </form>
  </Wrapper>
  );
}

export default Register
