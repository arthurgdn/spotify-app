import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { startRegister } from '../api'

const SignupForm =  ({startRegister,isAuthenticated})=>{
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault()
        startRegister({firstName,lastName,email,password})
    }

    

    return (
        <form onSubmit={onSubmit}>
            <h1>S'inscrire</h1>
            <input
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder="Prénom"
            />
            <input
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder="Nom"
            />
            <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="Mot de passe"
            />
            <button>S'inscrire</button>
        </form>
    )
}

const mapStateToProps = (state)=>({
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch)=>({
    startRegister: (registrationForm)=>dispatch(startRegister(registrationForm))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm)