import React,{useState,useEffect} from 'react'
import axios from 'axios'

import TrackElement from './TrackElement'
import GridDisplay from '../Containers/GridDisplay'
import { connect } from 'react-redux'

const mapStateToProps=(state)=>({
    apiKey:state.user.apiKey
})

export default connect(mapStateToProps)(({apiKey})=>{
    const [recentlyPlayedTracks,setRecentlyPlayedTracks]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    useEffect(()=>{
        axios.get('me/player/recently-played?limit=50').then(
            (res)=>{
                setRecentlyPlayedTracks(res.data.items)
                setLoading(false)
                setError('')
            }).catch((e)=>{
                setError('Impossible de charger les titres récemment joués')
                setLoading(false)
            })
    },[apiKey])
    return (
        <div>
            {loading?(<p className="tracks-list__loading">Chargement en cours ...</p>):(
                <div className="tracks-list__container">
                    {error &&(<p>{error}</p>)}
                    <GridDisplay arrayToMap={recentlyPlayedTracks} DisplayElement={TrackElement}/>
                </div>
                )}
        </div>
    )
})