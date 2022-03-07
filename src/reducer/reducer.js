const initialState={
    email:'',
    password:''
}

export const myLogin=(state=initialState,action)=>{

    switch(action.type){
        case 'LOGIN':
            return action.payload
        default:
            return state
    }

}