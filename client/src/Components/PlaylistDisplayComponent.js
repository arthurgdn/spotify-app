
import React,{useState,useEffect} from 'react'
import axios from 'axios'

import PlaylistTrack from './PLaylistTrack'

export default ({selectedPlaylist,playlistName})=>{
    const [playlistElements,setPlaylistElements]=useState([])
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        if(selectedPlaylist){
            axios.get('playlists/'+selectedPlaylist+'/tracks').then(
                (res)=>{
                    setPlaylistElements(res.data.items)
                    setLoading(false)
                    setError(playlistName)
                }).catch((e)=>{
                    setError('Impossible de charger les titres de la playlist')
                    setLoading(false)
                })
        }else{
            setLoading(false)
            setError('Veuillez selectionner une playlist pour afficher son contenu')
        }
        
    },[selectedPlaylist])
    return (
        <div className="playlist-container">
            {loading?(<p className="tracks-list__loading">Chargement en cours ...</p>):(
                <div className="tracks-list__container playlist-container"> 
                    {error &&(<h1 className="tab-content__title">{error}</h1>)}
                    {playlistElements.map((playlistTrack)=>(<PlaylistTrack track={playlistTrack.track}/>))}

                </div>
                )}
        </div>
    )
}