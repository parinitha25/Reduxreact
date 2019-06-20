import *as ActionTypes from '../Action/types';
// import Task2reducerA from './Task2reducerA';

const intialState = {
    numb:1
    
};
export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.UPDATE_B:{
            return{...state,numb:state.numb+action.payloadB}
        }
       
        default:
            return state;
    }
}