import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
 
import ArtistElement from '../Components/ArtistElement'
import DateRangeFilter from './DateRangeFilter'
import GridDisplay from '../Containers/GridDisplay'

const mapStateToProps = (state)=>({
    apiKey:state.user.apiKey
})

export default connect(mapStateToProps)(({apiKey})=>{
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
    },[dateRangeFilter,setDateRangeFilter,apiKey])

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
                    <GridDisplay arrayToMap={favouriteArtists} DisplayElement={ArtistElement}/>

                </div>
                )}
        </div>
    )
})