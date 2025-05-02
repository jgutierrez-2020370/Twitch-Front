import React from 'react'
import logo from '../assets/img/EscudoPeque.svg'

export const NavLogo = () => {
  return (
    <div className='nav-logo-container'>
        <img 
            src={logo} 
            width='100%'
            height='100%'        
            alt="Logo de la app" 
        />
    </div>
  )
}

const NavButton = ({text, onclickHanddler}) =>{
    return (
        <span className='nav-button' onClick={onclickHanddler}>
            {text}
        </span>
    )
}

export const Navbar = () => {
    const isLogged = true 
    const handleNavigateToPage = ()=>{

    }
  return (
    <div className='nav-container'>
        <NavLogo />

        <div className='nav-buttons-container'>
            <NavButton text='Browse' onclickHanddler={handleNavigateToPage}/>
            {
                !isLogged ? (
                    <NavButton text='Login' onclickHanddler={handleNavigateToPage}/>
                ) : (
                    <div>
                        <NavButton text='Account' onclickHanddler={handleNavigateToPage}/>
                        <NavButton text='LogOut' onclickHanddler={handleNavigateToPage}/>

                    </div>
                )
            }
        </div>
    </div>
  )
}

