import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
 
export const Channels = () => {
  const { Channels} = useOutletContext()
  const navigate = useNavigate()

  const handleNavigateToChannel = (id)=>{
    navigate(´/channel/${id}´)
  }
    return (
        <div className='channels-container'>
            <span></span>
        </div>
    )
}
 
 
