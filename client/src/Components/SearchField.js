import React, { useState } from 'react'
import {FaKey} from 'react-icons/fa'

const SearchField = ()=>{
    const [spotifyApiKey,setSpotifyApiKey]=useState('')

    return (
        <div className="search-field__container">
            <FaKey/>
            <input 
                value={spotifyApiKey}
                onChange={(e)=>setSpotifyApiKey(e.target.value)}
                placeholder="Clé d'API Spotify"
                className="search-field__input"
            />
        </div>
    )
}

export default SearchField