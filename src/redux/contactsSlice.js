import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactItems(state, action) {
      state.items = [...state.items, action.payload];
    },

    deleteContactItems(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const addContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContactItems, deleteContactItems } = contactsSlice.actions;


export const getContacts = state => state.contacts.items;