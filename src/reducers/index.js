import { combineReducers } from 'redux';

import appReducers from './appReducers';
import playersReducers from './playersReducers';
import queueReducers from './queueReducers';


export const rootReducer = combineReducers({
  app: appReducers,
  players: playersReducers,
  queue: queueReducers
});

