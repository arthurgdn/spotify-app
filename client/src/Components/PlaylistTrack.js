import React from 'react'
import moment from 'moment'
import formatArtistsName from '../utils/formatArtistsName'

const formatDuration = (millis)=>{
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export default ({track})=>(
    <div className="playlist__element">
        <img src={track.album.images[2].url}/>
        <p>{track.name} </p>
        <span>{formatArtistsName(track.artists)}</span>
        <p>{formatDuration(track.duration_ms)}</p>
        <span>{track.album.name}</span>

    </div>
)