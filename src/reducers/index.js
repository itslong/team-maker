import { combineReducers } from 'redux';

import appReducers from './appReducers';
import lobbyReducers from './lobbyReducers';
import queueReducers from './queueReducers';


export const rootReducer = combineReducers({
  app: appReducers,
  lobby: lobbyReducers,
  queue: queueReducers
});

