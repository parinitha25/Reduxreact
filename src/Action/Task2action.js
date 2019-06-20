import *as ActionTypes from './types';

export function onUpdateA(numc){
    return function(dispatch){
        dispatch({
            type:"UPDATE_A",payloadA:numc
        });
    }
}
export function onUpdateB(numd){
    return function(dispatch){
        dispatch({
            type:"UPDATE_B",payloadB:numd
        });
    }
}
export function onUpdateC(numa){
    return function(dispatch){
        dispatch({
            type:"UPDATE_C",payloadC:numa
        });
    }
}
export function onUpdateD(numb){
    return function(dispatch){
        dispatch({
            type:"UPDATE_D",payloadD:numb
        });
    }
}
