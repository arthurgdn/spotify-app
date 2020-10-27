import React,{useState,useEffect} from 'react'
import axios from 'axios'
import FavouriteTracks from '../Components/FavouriteTracks'



export default ()=>{
        
    return (
        <div>
            <h1 className="tab-content__title">Titres les plus écoutés </h1>
            <FavouriteTracks/>
        </div>
    )
}