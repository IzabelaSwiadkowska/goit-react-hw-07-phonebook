import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { deleteContact } from 'redux/actions';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <>
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={styles.item} key={id}>
              {name}:<span className={styles.span}>{number}</span>
              <button
                className={styles.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                <FontAwesomeIcon className={styles.icon} icon={faUserXmark} />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
