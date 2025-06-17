import Wrapper from '../assets/wrappers/SmallSidebar'

import React from 'react'
import { useDashboardConext } from '../pages/DashboardLayout'

const SmallSidebar = () => {
  const data =  useDashboardConext();
  console.log(data);
  return (
    <Wrapper>
      <h1>Small Sidebar</h1>
    </Wrapper>
  )
}

export default SmallSidebar
