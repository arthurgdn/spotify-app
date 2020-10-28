import React,{useState,useEffect} from 'react'
import axios from 'axios'

import ArtistElement from '../Components/ArtistElement'
import DateRangeFilter from './DateRangeFilter'

export default ()=>{
    const [favouriteArtists,setFavouriteArtists]=useState([])
    const [dateRangeFilter,setDateRangeFilter]=useState('short_term')
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')

    useEffect(()=>{
        axios.get('me/top/artists?limit=50&time_range='+dateRangeFilter).then(
            (res)=>{
                setFavouriteArtists(res.data.items)
                setLoading(false)
            }).catch((e)=>{
                setError('Impossible de charger les artistes préféres')
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
                    <div className="tracks-list__header">
                        <h1 className="tab-content__title">Artistes les plus écoutés </h1>
                        <DateRangeFilter handleChange={handleDateRangeChange}/>
                    </div>    
                    {error &&(<p>{error}</p>)}
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(0,4).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(4,8).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(8,12).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(12,16).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(16,20).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(20,24).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(24,28).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(28,32).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(32,36).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(36,40).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(40,44).map((artist)=>(<ArtistElement artist={artist}/>))}</div>
                    <div className="tracks-list__lign-container">{favouriteArtists.slice(44,48).map((artist)=>(<ArtistElement artist={artist}/>))}</div>

                </div>
                )}
        </div>
    )
}