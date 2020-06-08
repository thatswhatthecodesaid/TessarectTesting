const InitialTests = [{
    question:"What is the Capital of India ?",
    options:[
        "Delhi",
        "Mumbai",
        "Ahmedabad",
        "Bangalore"
    ]
},
{
    question:"What is the Capital of Gujarat ?",
    options:[
        "Vadodara",
        "Surat",
        "Ahmedabad",
        "Gandinagar"
    ]
},
{
    question:"What is the value of 2 + 2?",
    options:[
        "1",
        "2",
        "3",
        "4"
    ]
}
];
const TestsReducer = (state=InitialTests,action)=>{
    switch(action.type){
        case 'CREATE_TEST': return {...state,...action.payload};
        case 'ADD_QUESTION': ; let t = state; t.push(action.payload);  return t;  
        
        default: return state;
    }
}

export default TestsReducer