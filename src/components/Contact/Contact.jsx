import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';
import { IoPerson, IoCallSharp } from "react-icons/io5";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.container}>
      <div className={css.text}>
        <p className={css.name}>
          <IoPerson /> {contact.name}
        </p>
        <p className={css.number}>
          <IoCallSharp /> {contact.number}
        </p>
      </div>
      <button onClick={ handleDelete } className={css.btn}>
        Delete
      </button>
    </div>
  );
}