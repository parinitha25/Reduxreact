import *as ActionTypes from '../Action/types';

const intialState = {
    numa:1   
};

export default(stateA=intialState,action)=>{

    switch(action.type){
        case ActionTypes.UPDATE_A:{
            return{...stateA,numa:stateA.numa+action.payloadA}
            
        }   
       
        default:
            return stateA;
    }
}