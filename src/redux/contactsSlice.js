import { createSlice, nanoid } from "@reduxjs/toolkit";
import defaultContacts from "../data/contacts.json";
const contactsReduser = createSlice({
  name: "contacts",
  initialState: {
    items: [...defaultContacts],
    filteredItems: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
        state.filteredItems = state.items;
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
      state.filteredItems = state.items;
    },
    filteredContacts(state, action) {
      state.filteredItems = state.items.filter((contact) =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});
export const selectContacts = (state) =>
  state.contacts.filteredItems.length > 0
    ? state.contacts.filteredItems
    : state.contacts.items;
export const { addContact, deleteContact, filteredContacts } =
  contactsReduser.actions;
export default contactsReduser.reducer;
