import axios from 'axios'



export const login = (token)=>({
    type: 'LOGIN',
    token
})
export const loadUser = (user)=>({
    type: 'SET_USER',
    user
})
export const register = (token)=>({
  type : 'REGISTER',
  token
})
export const logout = ()=>({
    type:'LOGOUT'
})

export const startRegister = (registration_form)=>{
  return async (dispatch)=>{
    try{
        const res = await axios.post('/users',JSON.stringify(registration_form))
        localStorage.setItem('refreshToken',res.data.refreshToken)
        dispatch(register(res.data.token))
        dispatch(loadUser(res.data.user));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
       
    }catch(e){
      dispatch({
        type: 'REGISTER_ERROR'
      })
    }
  }
}
export const startLogin = (email,password)=>{
    return async (dispatch)=>{
      const body = JSON.stringify({ email, password })
      try {
        //We try to login the user
        const res = await axios.post('/users/login', body);
        
        localStorage.setItem('refreshToken',res.data.refreshToken)
        dispatch(login(res.data.token));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
        
        
        dispatch(loadUser(res.data.user));            
      } catch (e) {
          
        dispatch({
          type: 'AUTH_ERROR'
        });
      }
    }
}

export const startLoadUser =()=>{
    return async (dispatch)=>{
        try {
            const res = await axios.get('/users/me')
            dispatch({
              type: 'USER_LOADED'
            })
            dispatch(loadUser(res.data))
          } catch (e) {
            dispatch({
              type: 'SET_USER_ERROR'
            })
          }
    }
}
export const startLogout = ()=>{
    return async (dispatch)=>{
        try{
            
            await axios.post('/users/logout')
            localStorage.removeItem('refreshToken')
            dispatch(logout())
            dispatch({
                type : 'CLEAR_USER'
            })
            
        }catch(e){
            dispatch({
              type: 'LOGOUT_ERROR'
            });
          }
}
}

