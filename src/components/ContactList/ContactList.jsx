import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/phonebook/selectors";
import { deleteContact } from "redux/phonebook/contactsSlice";
import propTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();

    const onDeleteBtn = id => dispatch(deleteContact(id));

    const filteredContacts = (contacts, filterValue) => 
      filterValue
        ? contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
        : contacts;

    const filterContacts = filteredContacts(contacts, filterValue);

    return (
        <>
         <ul className={css.list}>
            {filterContacts.map(({ id, name, number }) =>(
              <li key={id} className={css.item}>
                <p className={css.name}>{name}</p>
                <p className={css.number}>{number}</p>
                <button type="button" onClick={() => onDeleteBtn(id)}>Delete</button>
              </li>
            ))}
         </ul>
        </>
    )
}

ContactList.propTypes = {
    onDeleteBtn: propTypes.func,
    contacts: propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string,
        name: propTypes.string,
        number: propTypes.string,
      }),
    ),
  };