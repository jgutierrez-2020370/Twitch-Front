import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import './Dashboard.css'
import { Navbar } from '../../components/Navbar'
import { DashboarContent } from '../../components/dashboarContent'


export const DashBoard = () => {
  return (
    <div className='dashboard-container'>
      <Navbar />
      <Sidebar />
      <DashboarContent />
    </div>
  )
}
