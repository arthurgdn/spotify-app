import React from 'react'
import { connect } from 'react-redux'
import SearchField from './SearchField'


const Header =  ({name})=>(
    <div className="header__container">
        
        <div>

            <img src="https://www.flaticon.com/svg/static/icons/svg/725/725281.svg"/>
            <h1 className="header__title">Spotify App</h1>
        </div>
        <SearchField/>
        <h1 className="header__title">{name &&(<span>Bienvenue {name}</span>)}</h1>
    </div>
    )
const mapStateToProps = (state)=>({
    name: state.user.name
})
export default connect(mapStateToProps)(Header)