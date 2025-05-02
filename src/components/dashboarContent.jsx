import React from 'react'
import { Outlet } from 'react-router-dom'

export const DashboarContent = () => {
  return (
    <div className='content-container'>
        <Outlet />
    </div>
  )
}
