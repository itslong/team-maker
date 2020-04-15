import { combineReducers } from 'redux';

import appReducers from './appReducers';
import playersReducers from './playersReducers';


export const rootReducer = combineReducers({
  app: appReducers,
  players: playersReducers
});

