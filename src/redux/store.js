import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './phonebook/contactsSlice';
import { filterReducer } from './phonebook/filterSlice';
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
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  // whitelist: ['contacts'],
}
const persistAddContactReducer = persistReducer(persistConfig, contactsReducer)
//const persistFilterReducer = persistReducer(persistConfig, filterReducer);

export const store = configureStore({
  reducer: {
    contacts: persistAddContactReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);