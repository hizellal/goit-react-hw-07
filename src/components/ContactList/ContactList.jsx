import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.selectContacts);
  const filterName = useSelector((state) => state.filters.text);

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterName.toLowerCase()));

  const handleDelete = (id) => {
    const deleteAction = deleteContact(id);
    dispatch(deleteAction);
  };

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
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