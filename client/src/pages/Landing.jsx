import React from 'react'
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

import { Link } from 'react-router-dom';
import { Logo } from '../components';



const Landing = () => {
  return (
  <Wrapper>
    <nav>
   <Logo />     

    </nav>
    <div className="container page">
        <div className="info">
            <h1>Tuition <span>BD</span> App</h1>
            <p>
                Welcome to Tuition BD, your one-stop solution for finding the best tutors in Bangladesh. 
                Whether you're looking for help with school subjects, exam preparation, or specialized skills, 
                our platform connects you with experienced tutors to help you achieve your academic goals.
            </p>
            <Link to='/register' className='btn register-link'>
            Register
            </Link>
             <Link to='/login' className='btn'>
            Login/Demo User
            </Link>
           
        </div>
        <img src={main} alt="job hunting" className='img main-img' />
    </div>
  </Wrapper>
  );
}



export default Landing
