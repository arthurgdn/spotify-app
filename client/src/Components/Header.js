import React from 'react'
import { connect } from 'react-redux'
import SearchField from './SearchField'


const Header =  ({name})=>(
    <div className="header__container">
        <h1 className="header__title">Spotify Stats App</h1>
        <SearchField/>
        <h1 className="header__title">{name &&(<span>Bienvenue {name}</span>)}</h1>
    </div>
    )
const mapStateToProps = (state)=>({
    name: state.user.name
})
export default connect(mapStateToProps)(Header)