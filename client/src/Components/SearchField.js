import React, { useState } from 'react'
import {connect} from 'react-redux'
import {FaKey,FaCheck} from 'react-icons/fa'
import { setUser, startSetUser } from '../actions/user'

const SearchField = ({localStateApiKey,startSetUser})=>{
    const [spotifyApiKey,setSpotifyApiKey]=useState(localStateApiKey)

    const handleApiKeyChange = ()=>{
        startSetUser(spotifyApiKey)
    }
    return (
        <div className="search-field__container">
            <FaKey/>
            <input 
                value={spotifyApiKey}
                onChange={(e)=>setSpotifyApiKey(e.target.value)}
                placeholder="Clé d'API Spotify"
                className="search-field__input"
            />
            <div onClick={handleApiKeyChange} className="search-field__button"><FaCheck/></div>
        </div>
    )
}


const mapStateToProps= (state)=>({
    localStateApiKey: state.user.apiKey
})

const mapDispatchToProps = (dispatch)=>({
    startSetUser: (apiKey)=>dispatch(startSetUser(apiKey))
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchField)