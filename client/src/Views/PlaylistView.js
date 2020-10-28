import React,{useState,useEffect} from 'react'

import PlaylistsComponent from '../Components/PlaylistsComponent'
import PlaylistDisplayComponent from '../Components/PlaylistDisplayComponent'

export default ()=>{
   const [selectedPlaylist,setSelectedPlaylist]=useState(null) 
   const [playlistName,setPlaylistName]=useState('')
   const handlePlaylistSelected=(id,name)=>{
    setSelectedPlaylist(id)
    setPlaylistName(name)
   }
    return (
        <div className="column-display">
            <PlaylistsComponent handlePlaylistSelected={handlePlaylistSelected}/>
            <PlaylistDisplayComponent selectedPlaylist={selectedPlaylist} playlistName={playlistName}/>
        </div>
    )
}