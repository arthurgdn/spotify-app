
import axios from 'axios'


export const setUser= (apiKey,name)=>({
    type:'SET_USER',
    apiKey,
    name
})

export const startSetUser = (apiKey)=>{
    return async (dispatch)=>{
        try{
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + apiKey;
            const res = await axios.get('/me')
            dispatch(setUser(apiKey,res.data.display_name))
            localStorage.setItem("apiKey",apiKey)
        }catch(e){
            dispatch({
                type:'API_KEY_ERROR'
            })
        }
    }
}
