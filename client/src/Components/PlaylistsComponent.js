import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import PlaylistElement from './PlaylistElement'
import GridDisplay from '../Containers/GridDisplay'

const mapStateToProps = (state)=>({
    apiKey:state.user.apiKey
})

export default connect(mapStateToProps)(({apiKey,handlePlaylistSelected})=>{
    const [playlists,setPlaylists]=useState([])
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get('me/playlists?limit=20').then(
            (res)=>{
                setPlaylists(res.data.items)
                setLoading(false)
                setError('')
            }).catch((e)=>{
                setError('Impossible de charger les playlists écoutées récemment')
                setLoading(false)
            })
    },[apiKey])

    return (
        <div>
            {loading?(<p className="tracks-list__loading">Chargement en cours ...</p>):(
                <div className="tracks-list__playlist-container">
                    <h1 className="tab-content__title">Playlists récentes </h1>
                    {error &&(<p>{error}</p>)}
                    {playlists.map((playlist)=>(<PlaylistElement {...playlist} handlePlaylistSelected={()=>handlePlaylistSelected(playlist.id,playlist.name)}/>))}
                </div>
                )}
        </div>
    )
})