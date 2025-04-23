import css from './SearchBox.module.css';
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { contactFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useId } from 'react';

export default function SearchBox() {
  const id = useId();
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(contactFilter(event.target.value));
  };

  return (
    <>
      <Formik>
        <Form className={css.cont}>
          <label htmlFor={id} className={css.label}>
            Find contacts by name
          </label>
          
          <Field
            className={css.input}
            type="text"
            id={id}
            value={nameFilter}
            onChange={handleChange}
          />
        </Form>
      </Formik>
    </>
  );
}