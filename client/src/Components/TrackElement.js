import React from 'react'
import moment from 'moment'
import formatArtistsName from '../utils/formatArtistsName'

export default ({track,played_at})=>(
    <div className="tracks-list__element">
        <img src={track.album.images[1].url}/>
        <p>{track.name} <span>{formatArtistsName(track.artists)}</span></p>
        {played_at&&(<span>{moment(played_at).locale('fr').fromNow()}</span>)}

    </div>
)