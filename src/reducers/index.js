import { combineReducers } from 'redux';

import appReducers from './appReducers';
import lobbyReducers from './lobbyReducers';
import queueReducers from './queueReducers';
import teamsReducers from './teamsReducers';


export const rootReducer = combineReducers({
  app: appReducers,
  lobby: lobbyReducers,
  queue: queueReducers,
  teams: teamsReducers,
});
