// export const changeFilter = (value) => {
//   return {
//     type: "filters/change",
//     payload: value,
//   };
// };
// export const getContacts = (contacts) => {
//   return {
//     type: "filters/filter",
//     payload: contacts,
//   };
// };
// export const filtersReduser = (
//   state = { name: "", visibleContacts: [] },
//   action
// ) => {
//   switch (action.type) {
//     case "filters/change":
//       return { name: action.payload };
//     case "filters/filter":
//       return {
//         visibleContacts: action.payload.filter((contact) =>
//           contact.name.toLowerCase().includes(state.name.toLowerCase())
//         ),
//       };
//     default:
//       return state;
//   }

import { createSlice } from "@reduxjs/toolkit";

// };
const filtersReduser = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;
export const { changeFilter } = filtersReduser.actions;
export default filtersReduser.reducer;
