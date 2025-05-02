import React, { useState } from 'react'
import { getChannelsRequest } from '../../services/api'
import toast from 'react-hot-toast'
 
export const useChannels = () => {
     const [channels, setChanels] = useState(null)
 
     const getChannels = async (isLogged = false)=>{
        const channelsData = await getChannelsRequest()
 
        //si hay error
        if(channelsData.error){
            return toast.error(
                channelsData?.err?.response?.data||
                'Error al obtener los canales'
            )
        }
        //Si no esta logeado
        if(!isLogged){
            return setChanels (
                {
                    chanels: channelsData.data.chanels
                }
            )
        }
        //si esta logeado
        setChanels(
            {
                chanels: channelsData.data.channels,
                followedChannels: 'Mas adelante aqui van a los que siguen'
            }
        )
     }
    return {
        getChannels,
        isFetching: !channels,
        allChannels: channels?.chanels,
        followedChannels: channels?.followedChannels
   
    }
}
 
 