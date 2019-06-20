import *as ActionTypes from '../Action/types';

const intialState = {
    numd:1
    
};
export default(stateD=intialState,action)=>{
    switch(action.type){
        case ActionTypes.UPDATE_D:{
            return{...stateD,numd:stateD.numd+action.payloadD}
        }
       
        default:
            return stateD;
    }
}