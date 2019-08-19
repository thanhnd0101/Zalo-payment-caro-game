const initialLeaderboardState={
    leaderboard:[]
}

const LeaderboardReducer=(state=initialLeaderboardState,action)=>{ 
    switch(action.type){
        case 'UPDATE_LEADERBOARD':
            return {...state,
                leaderboard:action.payload};
        default:
            return state;
    }
}

export default LeaderboardReducer;