import { combineReducers } from 'redux';

import auth from './auth/reducer';
import profile from './profile/reducer';
import users from './users/reducer';

export default combineReducers({
  auth,
  profile,
  users,
});
