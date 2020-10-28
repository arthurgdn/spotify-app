import React from 'react'


export default ({images,name})=>(
    <div className="tracks-list__element">
        <img src={images[1].url}/>
        <p>{name}</p>
        

    </div>
)