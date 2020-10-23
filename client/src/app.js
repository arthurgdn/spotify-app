import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import axios from 'axios'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import HomePage from './components/HomePage'
import {startLoadUser} from './api'



const store = configureStore()



axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json'
axios.defaults.baseURL = 'http://localhost:3000/'

axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      let refreshToken = localStorage.getItem("refreshToken");if (
        refreshToken &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        return axios
          .post(`token`, {refreshToken })
          .then((res) => {
            if (res.status === 200) {
              store.dispatch({type:'LOGIN', token : res.data.token})
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
              
              return axios(originalRequest);
            }
          });
      }
      return Promise.reject(error);
    }
  );

  if (localStorage.getItem('refreshToken')) {
    store.dispatch(startLoadUser())
  }

ReactDOM.render(<Provider store = {store}><AppRouter/></Provider>,document.getElementById('app'))



