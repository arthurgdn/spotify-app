import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import HomePage from './Views/HomePage'

axios.defaults.baseURL = 'https://api.spotify.com/v1/'




ReactDOM.render(<HomePage/>,document.getElementById('app'))



