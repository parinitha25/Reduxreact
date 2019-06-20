import *as ActionTypes from '../Action/types';

const intialState = {
    numc:1
    
};
export default(stateC=intialState,action)=>{
    switch(action.type){
        case ActionTypes.UPDATE_C:{
            return{...stateC,numc:stateC.numc+action.payloadC}
        }
       
        default:
            return stateC;
    }
}