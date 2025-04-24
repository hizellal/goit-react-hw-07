import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts)

  const handleDelete = (id) => {
    const deleteAction = deleteContact(id);
    dispatch(deleteAction);
  };

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact 
            contact={contact} 
            onDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
}