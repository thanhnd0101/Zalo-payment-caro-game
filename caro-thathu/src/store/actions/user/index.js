export const updateUser=(id,username,golds,token,totalPlayedGame,socket,typePattern)=>{
    return{
        type:'UPDATE_USER',
        payload:{    
            id:id,
            username:username,
            golds:golds,
            token:token,
            totalPlayedGame:totalPlayedGame,
            socket:socket,
            typePattern:typePattern            
        }
    }
}
export const updateUserPattern=(pattern)=>{
    return{
        type:'UPDATE_USER_PATTERN',
        payload:{    
            typePattern:pattern            
        }
    }
}
export const userLogOut=()=>{
    return{
        type:'USER_LOG_OUT'
    }
}

export const initialState=()=>{
    return{
        type:'INITIAL_STATE'
    }
}
