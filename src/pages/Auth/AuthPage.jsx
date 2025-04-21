import React, { useState } from 'react'
import { Register } from '../../components/Register'
import './AuthPage.css'

//Componente exportado por Named (Quiero tener más componentes en un archivo)
export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(false)
    const handleIsLogin = ()=>{
        setIsLogin((prev)=> !prev)
    } 
  return (
    <div className="auth-container">
        {
            isLogin ? (
                <h1>Bienvenido</h1>
            ) : (
                <Register />
            )
        }
    </div>
  )
}
