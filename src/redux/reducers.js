import { nanoid } from "nanoid"
import { getContacts, setContact, deleteContact } from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const initialContacts = {contacts: [
    {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
    {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
    {id: "id-3", name: "Eden Clements", number: "645-17-79"},
    {id: "id-4", name: "Annie Copeland", number: "227-91-26"},
  ],
filter: '',
}


  export const contactsReducer = createReducer(initialContacts, builder => {
    builder.addCase(getContacts, (state, action) => {
      state.filter = action.payload
    })
    .addCase(deleteContact, (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    })
    .addCase(setContact, (state, action) => {
      state.contacts = [...state.contacts, {id: nanoid(), name: action.payload.name, number: action.payload.number}]
    })
  })

  

