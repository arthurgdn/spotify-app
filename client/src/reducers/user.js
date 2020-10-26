const apiKeyReducerDefaultState = {
    name:'',
    apiKey:'',
    apiKeyError:''
}


export default (state = apiKeyReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_USER':
            return {
                name:action.name,
                apiKey:action.apiKey,
                apiKeyError:''
            }
        case 'API_KEY_ERROR':
            return {
                ...state,
                apiKeyError:'Impossible de se connecter aux données Spotify, veuillez vérifier que votre clé est correcte'
            }
        
        default: return state
    }
}