import React from 'react'
import Header from '../Components/Header'
import TabNavigation from '../Components/TabNavigation'
import ArtistView from './ArtistView'
import TitleView from './TitleView'
import DashboardView from './DashboardView'
import RecentView from './RecentView'

export default ()=>{

    const childComponents = [
        {
            title:"Général",
            index:0,
            component:(<DashboardView/>)
        },{
            title:"Mes Artistes",
            index:1,
            component:(<ArtistView/>)
        },
        {
            title:"Mes Titres",
            index:2,
            component:(<TitleView/>)
        },
        {
            title:"Joués récemment",
            index:3,
            component:(<RecentView/>)
        }
    ]
    return (
        <div className>
            <Header/>
            <TabNavigation childComponents={childComponents}/>
        </div>
    )

}