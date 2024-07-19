import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";
import defaultContacts from "../data/contacts.json";
import { selectNameFilter } from "./filtersSlice";

const contactsReducer = createSlice({
  name: "contacts",
  initialState: {
    items: [...defaultContacts],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            id: nanoid(),
            ...value,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, name) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    )
);
export const { addContact, deleteContact } = contactsReducer.actions;
export default contactsReducer.reducer;
