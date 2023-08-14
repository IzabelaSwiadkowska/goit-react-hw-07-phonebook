import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import styles from './ContactForm/ContactForm.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/actions';
import { getIsLoading, getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {error ? (
        <div> Something goes wrong... </div>
      ) : (
        <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          {isLoading && <div> Please wait a second...</div>}
          <ContactList />
        </div>
      )}
    </div>
  );
};
