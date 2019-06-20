const initialState={
    numa:1,
    numb:1,
    numc:1,
    numd:1

};
const reducersa=(state=initialState,action)=>{
const newState={...state};

switch(action.type){
    case 'UPDATEA':
        newState.numa+=newState.numc;
        break;
    case 'UPDATEB':
            newState.numb+=newState.numd;    
        break;
    case 'UPDATEC':
            newState.numc+=newState.numa;    
        break;
    case 'UPDATED':
            newState.numd+=newState.numb;    
        break;
              
}
return newState;
};
export default reducersa;