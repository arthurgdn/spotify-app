import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import axios from 'axios'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


import configureStore from './store/configureStore'
import HomePage from './Views/HomePage'
import { setUser } from './actions/user'

axios.defaults.baseURL = 'https://api.spotify.com/v1/'
const store = configureStore()

if(localStorage.getItem('apiKey')){
  store.dispatch(setUser(localStorage.getItem('apiKey')))
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('apiKey')
}


ReactDOM.render(<Provider store={store}><HomePage/></Provider>,document.getElementById('app'))



