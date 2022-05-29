import { combineReducers } from 'redux';
import { todo } from './todo';
import { photo } from './photo';

export const rootReducers = combineReducers({
   todo,
   photo,
});
