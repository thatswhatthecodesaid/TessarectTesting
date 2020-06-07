const InitialTests = [];
const TestsReducer = (state=InitialTests,action)=>{
    switch(action.type){
        case 'CREATE_TEST': return {...state,...action.payload};
        default: return state;
    }
}

export default {TestsReducer}