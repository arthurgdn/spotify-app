import React from 'react'

export default ({arrayToMap,DisplayElement})=>(
    <div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(0,4).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(4,8).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(8,12).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(12,16).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(16,20).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(20,24).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(24,28).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(28,32).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(32,36).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(36,40).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(40,44).map((obj)=>(<DisplayElement {...obj}/>))}</div>
        <div className="tracks-list__lign-container">{arrayToMap.slice(44,48).map((obj)=>(<DisplayElement {...obj}/>))}</div>
    </div>
)