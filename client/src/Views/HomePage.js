import React from 'react'
import Header from '../Components/Header'
import TabNavigation from '../Components/TabNavigation'

import ArtistView from './ArtistView'
import TitleView from './TitleView'
import PlaylistView from './PlaylistView'
import RecentView from './RecentView'

export default ()=>{

    const childComponents = [
        {
            title:"Joués récemment",
            index:0,
            component:(<RecentView/>)
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
            title:"Mes playlists",
            index:3,
            component:(<PlaylistView/>)
        }
    ]
    return (
        <div className>
            <Header/>
            <TabNavigation childComponents={childComponents}/>
        </div>
    )

}