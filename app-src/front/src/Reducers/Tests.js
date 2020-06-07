const InitialTests = [];
const TestsReducer = (state=InitialTests,action)=>{
    switch(action.type){
        case 'CREATE_TEST': return {...state,...action.payload};
        case 'ADD_QUESTION': return state.push(action.payload);
        default: return state;
    }
}

export default TestsReducer