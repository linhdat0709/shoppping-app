import React from 'react'
import { Login } from '../../components/Login/Login'
import { Main } from '../../components/Main/Main'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { StyLeDefaultLayout } from './Home.style'

const Home = () => {
  return (
    <StyLeDefaultLayout>
      {/* <Sidebar/>
      <Main/> */}
      <Login/>
    </StyLeDefaultLayout>
  )
}

export default Home
