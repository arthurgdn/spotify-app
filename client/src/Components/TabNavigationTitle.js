import React from 'react'

export default ({component,onTabClick})=>{
    return (
        <div onClick={()=>onTabClick(component.index)} className="tab-navigation__title-container">
            <h3>{component.title}</h3>
        </div>
    )
}