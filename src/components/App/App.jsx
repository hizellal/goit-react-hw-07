import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
import { use, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import Loader from "../Loader/Loader";
import MessageError from '../MessageError/MessageError';

export default function App() {
  const dispatch = useDispatch(); 
  const contacts = useSelector((state) => state.contacts.selectContacts);
  const isLoading = useSelector((state) => state.contacts.selectLoading);
  const isError = useSelector((state) => state.contacts.selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader/>}
      {isError && <MessageError />}
      {Array.isArray(contacts) && contacts.length > 0 && <ContactList />}
    </div>
  );
}
