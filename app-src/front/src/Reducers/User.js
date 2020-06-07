const InitialUser = {
    name:"Loading... User Details"
}

const UserReducer = (state=InitialUser,action)=>{
    switch(action.type)
    {
        case 'UPDATE_WHOLE_USER': return {...action.payload};
        default: return state;
    }
}

export default {UserReducer}