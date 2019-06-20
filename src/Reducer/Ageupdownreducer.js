import *as ActionTypes from '../Action/types';

const intialState = {
    age:20
    
};
export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.AGE_UP:{
            return{...state,age:state.age+action.value}
        }
        case ActionTypes.AGE_DOWN:{
            return{...state,age:state.age-action.value}
        }
        default:
            return state;
    }
}