const initialState = {
    user:null
}

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD_USER": return {
            ...state,
            user:"User logged in"
        }

        default: return state;
    }
}

export default userReducer