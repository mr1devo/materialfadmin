import React from 'react'
import './home.css'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import { Button } from '@mui/material'
import Dashboard from './Dashboard'

const Home = (props) => {
  return (
    <div>

     <Dashboard xxx={props.checkLogout}/>
     {/* <h1 className='wel'> Welcome to Admin Panel</h1> */}
     {/* <Sidebar/> */}
      </div>
  )
}

export default Home