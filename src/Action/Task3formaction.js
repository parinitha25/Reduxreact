import *as ActionTypes from './types';

export function submit(){
    return function(dispatch){
        dispatch({
            type:"SUBMIT"
        });
    }
}

