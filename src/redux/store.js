import { contactsReducer } from './slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({reducer: {contacts: contactsReducer}})