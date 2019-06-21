import {combineReducers}from 'redux';

import Ageupdownreducer from './Ageupdownreducer';
import Task2reducerA from './Task2reducerA';
import Task2reducerB from './Task2reducerB';
import Task2reducerC from './Task2reducerC';
import Task2reducerD from './Task2reducerD';
import Task3formreducer from './Task3formreducer';

export default combineReducers({
    Ageupdownreducer,
    Task2reducerA,
    Task2reducerB,
    Task2reducerC,
    Task2reducerD,
    Task3formreducer
});