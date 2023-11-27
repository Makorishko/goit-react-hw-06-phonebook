import { configureStore } from '@reduxjs/toolkit';
import { addContactsReducer } from './contactsSlice';
import { filtersReducer } from '../redux/filterSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: addContactsReducer,
    filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
