import React, { useEffect } from 'react'
import { Sidebar } from '../../components/Sidebar'
import './Dashboard.css'
import { Navbar } from '../../components/Navbar'
import { DashboarContent } from '../../components/dashboarContent'
import { useChannels } from '../../shared/hooks/useChannels'


export const DashBoard = () => {
  const { getChannels, allChannels} = useChannels()

  useEffect(() => {
    getChannels()
  }, [third])

  return (
    <div className='dashboard-container'>
      <Navbar />
      <Sidebar />
      <DashboarContent channels={allChannels} getChannels={getChannels}/>
    </div>
  )
}
