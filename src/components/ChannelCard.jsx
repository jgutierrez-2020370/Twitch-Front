import PropTypes from 'prop-types'
import propTypes from 'prop-types'
import React from 'react'

const imageUrl = 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg' 


export const ChannelAvatar = ({url}) => {
  return (
    <div className='channels-avatar-container'>
        <img
            src={url || imageUrl}
            width='100%'
            height='100%'
            alt="Channel Avatar" 
        />
    </div>
  )
}

export const ChannelCard = (
    title,
    id,
    username,
    isOnline,
    avatarURL,
    navigateToChannelHandler
) => {
    
    const handleNavigateToChannel = () =>{
        navigateToChannelHandler(id)
    } 

  return (
    <div className='channels-card' onClick={handleNavigateToChannel}>
        <ChannelAvatar url={avatarURL}/>
        <span className='channels-card-tittle'>{title}</span>
        <span className='channels-card-tittle'>{username}</span>
        <span 
            className='channels-card-tittle'
            style={{color: isOnline ? 'green' : 'red' }}
        >
            {  
                isOnline ? '🟢' : '🔴'
            }
        </span>
    </div>
  )
}

ChannelCard.propTypes = {
    title: PropTypes.string.isRequired,
    id: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
    avatarURL: propTypes.string.isRequired,
    navigateToChannelHandler: propTypes.func.isRequired,
}
