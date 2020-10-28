import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'


import TrackElement from '../Components/TrackElement'
import DateRangeFilter from './DateRangeFilter'
import GridDisplay from '../Containers/GridDisplay'

const mapStateToProps=(state)=>({
    apiKey:state.user.apiKey
})

export default connect(mapStateToProps)(({apiKey})=>{
    const [favouriteTracks,setFavouriteTracks]=useState([])
    const [dateRangeFilter,setDateRangeFilter]=useState('short_term')
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    useEffect(()=>{
        axios.get('me/top/tracks?limit=50&time_range='+dateRangeFilter).then(
            (res)=>{
                setFavouriteTracks(res.data.items.map((item)=>({track:{...item}})))
                setLoading(false)
            }).catch((e)=>{
                setError('Impossible de charger les titres préféres')
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
                    {error &&(<p>{error}</p>)}
                    <div className="tracks-list__header">
                        <h1 className="tab-content__title">Titres les plus écoutés </h1>
                        <DateRangeFilter handleChange={handleDateRangeChange}/>
                    </div>
                    <GridDisplay arrayToMap={favouriteTracks} DisplayElement={TrackElement}/>
                </div>
                )}
        </div>
    )
})