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

