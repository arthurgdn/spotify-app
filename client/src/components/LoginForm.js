import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { startLogin } from '../api'

const LoginForm =  ({startLogin,isAuthenticated})=>{
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        startLogin(email,password)
    }

    
    return (
        <form onSubmit={onSubmit}>
            <h1>Se connecter</h1>
            <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Mot de passe"
                type="password"
            />
            <button>Se connecter</button>
        </form>
        )
}

const mapStateToProps = (state)=>({
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch)=>({
    startLogin : (email,password)=>dispatch(startLogin(email,password))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)