import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'crud-users',
      storage,
      whitelist: ['auth', 'profile'],
    },
    reducers
  );

  return persistedReducer;
};
