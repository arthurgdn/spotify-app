import React,{useState,useEffect} from 'react'
import axios from 'axios'
import RecentlyPlayedTracks from '../Components/RecentlyPlayedTracks'

export default ()=>{
   
    return (
        <div>
            <h1 className="tab-content__title">Titres joués récemment</h1>
            <RecentlyPlayedTracks/>
        </div>
    )
}