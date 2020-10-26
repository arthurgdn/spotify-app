import React from 'react'
import Header from '../Components/Header'
import TabNavigation from '../Components/TabNavigation'
import ArtistView from './ArtistView'
import TitleView from './TitleView'
import DashboardView from './DashboardView'

export default ()=>{

    const childComponents = [{title:"Général",index:0,component:(<DashboardView/>)},{title:"Mes Artistes",index:1,component:(<ArtistView/>)},{title:"Mes Titres",index:2,component:(<TitleView/>)}]
    return (
        <div className>
            <Header/>
            <TabNavigation childComponents={childComponents}/>
        </div>
    )

}