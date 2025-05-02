import React from 'react'
import { Outlet } from 'react-router-dom'

export const DashboarContent = ({channels, getChannels}) => {
  return (
    <div className='content-container'>
        <Outlet context={{channels, getChannels}}/>
    </div>
  )
}
