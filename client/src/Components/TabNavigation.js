import React,{useState} from 'react'

import TabNavigationTitle from './TabNavigationTitle'

export default ({childComponents})=>{
    const [tabIndex,setTabIndex]=useState(0)
    const onTabClick = (index)=>{
        setTabIndex(index)
    }
    return (
        <div >
            <div className="tab-navigation__container">
                {childComponents.map((component)=>(<TabNavigationTitle component={component} onTabClick={onTabClick}/>))}
            </div>
            {childComponents[tabIndex].component}
        </div>
    )
}