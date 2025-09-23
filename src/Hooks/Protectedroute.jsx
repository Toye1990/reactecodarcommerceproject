import React from 'react'
import { ContextData } from './Formcontext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Protectedroute = ({children}) => {
    const {token, user} = ContextData()
    const navigate = useNavigate()
    
    if(!user || !token){
        toast.error("you are not logged in!")
        navigate("/login")
    }

  return children
}

export default Protectedroute
