import React,{useState,useEffect} from 'react'
import axios from 'axios'


import TrackElement from '../Components/TrackElement'
import DateRangeFilter from './DateRangeFilter'

export default ()=>{
    const [favouriteTracks,setFavouriteTracks]=useState([])
    const [dateRangeFilter,setDateRangeFilter]=useState('short_term')
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    useEffect(()=>{
        axios.get('me/top/tracks?limit=50&time_range='+dateRangeFilter).then(
            (res)=>{
                setFavouriteTracks(res.data.items)
                setLoading(false)
            }).catch((e)=>{
                setError('Impossible de charger les titres préféres')
                setLoading(false)
            })
    },[dateRangeFilter,setDateRangeFilter])

    const handleDateRangeChange = (value)=>{
        setDateRangeFilter(value)
    }

    return (
        <div>
            {loading?(<p className="tracks-list__loading">Chargement en cours ...</p>):(
                <div className="tracks-list__container">
                    {error &&(<p>{error}</p>)}
                    <div className="tracks-list__header">
                        <h1 className="tab-content__title">Titres les plus écoutés </h1>
                        <DateRangeFilter handleChange={handleDateRangeChange}/>
                    </div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(0,4).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(4,8).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(8,12).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(12,16).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(16,20).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(20,24).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(24,28).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(28,32).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(32,36).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(36,40).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(40,44).map((track)=>(<TrackElement track={track}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteTracks.slice(44,48).map((track)=>(<TrackElement track={track}/>))}</div>

                </div>
                )}
        </div>
    )
}