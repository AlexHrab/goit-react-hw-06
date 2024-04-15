import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialContacts = {contacts: [
    {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
    {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
    {id: "id-3", name: "Eden Clements", number: "645-17-79"},
    {id: "id-4", name: "Annie Copeland", number: "227-91-26"},
  ],
filter: '',
}

const slice = createSlice({
    name: 'contacts',
initialState: initialContacts,
selectors: {selectContacts: state => state.contacts,
             selectFilter: state => state.filter,
},
reducers: {
    getContacts: (state, {payload}) => {state.filter === payload},
    deleteContact: (state, {payload} ) => {state.contacts = state.contacts.filter(contact => contact.id !== payload)},
    setContact: (state, {payload}) => {state.contacts = [...state.contacts, {id: nanoid(), name: payload.name, number: payload.number}]},

}
})

export const contactsReducer = slice.reducer
export const {getContacts, deleteContact, setContact} = slice.actions
export const {selectContacts, selectFilter} = slice.selectors