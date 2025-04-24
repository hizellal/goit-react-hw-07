import css from './ContactForm.module.css';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string()
  .matches(
    /^(\+?\d{1,3})?[-.\s]?(\d{1,4})?[-.\s]?\d{1,5}[-.\s]?\d{1,5}$/,
    "Invalid phone number format"
  )
  .required("Required"), 
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, form) => {
    dispatch(addContact(values));
    form.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type="text" name="name"  id="name" className={css.field} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>

        <label htmlFor="number" className={css.label}>
          Number
          <Field type="tel" name="number" id="number" className={css.field} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button type="submit" className={css.btn}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}