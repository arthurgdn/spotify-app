import React from 'react'


export default ({images,name,handlePlaylistSelected})=>(
    <div className="tracks-list__playlist-element" onClick={handlePlaylistSelected}>
    
        <img src={images.length>0&&images[images.length-1].url}/>
        <p>{name}</p>
        

    </div>
)