import *as ActionTypes from './types';

export function onAgeUp(){
    return function(dispatch){
        dispatch({
            type:"AGE_UP",value:1
        });
    }
}
export function onAgeDown(){
    return function(dispatch){
        dispatch({
            type:"AGE_DOWN",value:1
        });
    }
}
