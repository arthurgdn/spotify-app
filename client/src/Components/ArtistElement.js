import React from 'react'


export default ({artist})=>(
    <div className="tracks-list__element">
        <img src={artist.images[1].url}/>
        <p>{artist.name}</p>
        

    </div>
)