import React,{useState,useEffect} from 'react'
import axios from 'axios'
import FavouriteArtists from '../Components/FavouriteArtists'



export default ()=>{
        
    return (
        <div>
            <h1 className="tab-content__title">Artistes les plus écoutés </h1>
            <FavouriteArtists/>
        </div>
    )
}