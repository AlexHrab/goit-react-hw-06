import { createAction } from "@reduxjs/toolkit"


export const getContacts = createAction('getContacts');
export const deleteContact = createAction('deleteContact')
export const setContact = createAction('setContact')