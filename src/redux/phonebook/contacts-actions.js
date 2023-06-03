import { createAction } from '@reduxjs/toolkit';
import nanoid from 'nanoid';

const addContact = createAction('contacts/add', value => {
    return {
        payload: { id: nanoid(), ...value },
    }
})

const deleteContact = createAction('contacts/delete');
const filterContacts = createAction('contacts/changeFilter');

export default { addContact, deleteContact, filterContacts };