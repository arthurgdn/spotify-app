import React,{useState,useEffect} from 'react'
import axios from 'axios'

import TrackElement from './TrackElement'

export default ()=>{
    const [recentlyPlayedTracks,setRecentlyPlayedTracks]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    useEffect(()=>{
        axios.get('me/player/recently-played').then(
            (res)=>{
                setRecentlyPlayedTracks(res.data.items)
                setLoading(false)
            }).catch((e)=>{
                setError('Impossible de charger les titres récemment joués')
                setLoading(false)
            })
    },[])
    return (
        <div>
            {loading?(<p className="tracks-list__loading">Chargement en cours ...</p>):(
                <div className="tracks-list__container">
                    {error &&(<p>{error}</p>)}
                    <div className="tracks-list__lign-container">{recentlyPlayedTracks.slice(0,4).map((track)=>(<TrackElement track={track.track} played_at={track.played_at}/>))}</div>
                    <div className="tracks-list__lign-container">{recentlyPlayedTracks.slice(4,8).map((track)=>(<TrackElement track={track.track} played_at={track.played_at}/>))}</div>
                    <div className="tracks-list__lign-container">{recentlyPlayedTracks.slice(8,12).map((track)=>(<TrackElement track={track.track} played_at={track.played_at}/>))}</div>
                    <div className="tracks-list__lign-container">{recentlyPlayedTracks.slice(12,16).map((track)=>(<TrackElement track={track.track} played_at={track.played_at}/>))}</div>
                    <div className="tracks-list__lign-container">{recentlyPlayedTracks.slice(16,20).map((track)=>(<TrackElement track={track.track} played_at={track.played_at}/>))}</div>

                </div>
                )}
        </div>
    )
}