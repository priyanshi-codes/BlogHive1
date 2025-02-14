//mechanism how protect your pags and routes

import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({
    children , authentication =true
}) {
const navigate = useNavigate();
const [loader, setLoader] = useState(true)
const authStatus= useSelector(state => state.auth.status)

useEffect(()=>{

// true && false !== true(true && true)

//TODO : Make it more easy

//easy way 
// if(authStatus==true){
    // navigate('/')
// } else if (authStatus == false){
    // navigate('/login')
// }

//let authvalue = authStatus == true ? true :false

    if(authentication && authStatus !== authentication){
        navigate('/login')

    }
    // !true && true !== true(false &&false)
    else if(!authentication && authStatus!==authentication){
        navigate('/')
    }
    setLoader(false)
}, [authStatus,navigate,authentication])
  return (
    loader ? <h1>Loading...</h1> : children
  )
}


