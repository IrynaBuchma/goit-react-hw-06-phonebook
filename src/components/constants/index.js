export const CONTACTS = [
    { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ];

// import { createReducer } from "@reduxjs/toolkit";
// import { CONTACTS } from "components/constants";
// // import { setFilter, addContact, deleteContact } from "./contacts-actions";

// const initialState = 
//     {
//         contacts: [...CONTACTS],
//         filter: "",
//       }


// export const contactsReducer = createReducer(
//     JSON.parse(window.localStorage.getItem('items')) ?? CONTACTS, 
//     {
//         [addContact]: (state, { payload }) => [...state, payload],
//         [deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
//     });

// export const filterReducer = createReducer('', {
//     [changeFilter]: (_, { payload }) => payload,
// });

 
// export const contactsReducer = createReducer(initialState.contacts,(builder)=>{
//     builder
//     .addCase('contacts/add', (state, action) => {
//         state.contacts.push(action.payload);
//     })
//     .addCase('contacts/delete', (state, action) => {
//         const index = state.contacts.findIndex((el) => el.id === action.payload);
//         state.contacts.splice(index, 1);
//     })
// })
// export const filterReducer = createReducer(initialState.filter, (builder)=>{
//     builder
//     .addCase('contacts/filter', (state, action) => {
//         state.contacts.includes(action.payload);
//     })
// })