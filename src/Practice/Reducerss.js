const initialState={
    age:20
};
const reducer=(state=initialState,action)=>{
const newState={...state};

switch(action.type){
    case 'AGE_UP':
        newState.age+=action.value;
        break;
    case 'AGE_DOWN':{
        if(newState.age>0){
            newState.age-=action.value;
        }
        else{
        alert('already zero');   
        }
        break;
    }
    case 'AGE':
        newState.age+=action.value;   
        break;           
}
return newState;
};
export default reducer;