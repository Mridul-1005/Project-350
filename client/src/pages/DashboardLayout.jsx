

import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { createContext } from 'react'

const DashboardConext = createContext()

const DashboardLayout = () => {
  //temp
  const user = {name: 'Mridul'}
  const [showSidebar,setShowSidebar] = useState(false)
  const [isDarkTheme,setIsDarkTheme] = useState(false)

const toggleDarkTheme = () =>{
  console.log('toggle dark theme');
};

const toggleSidebar = () =>{
  setShowSidebar(!showSidebar);
};

const logoutUser = async ()=>{
     console.log('logout user');
};



  return (
    <DashboardConext.Provider 
    value={{
      user,
       showSidebar,
        isDarkTheme,
         toggleDarkTheme,
          toggleSidebar,
           logoutUser
      }}
      >
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar/>
        <BigSidebar />
        <div>
          <Navbar/>
          <div className='dashboard-page'>
            <Outlet />
            </div>
        </div>
      </main>
      
    </Wrapper>
    </DashboardConext.Provider>
  );
};

export const useDashboardConext = ()=> useContext(DashboardConext);
export default DashboardLayout
