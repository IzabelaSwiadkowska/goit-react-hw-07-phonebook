import styles from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from 'redux/filterSlice';

import './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.container}>
      <label>Find contacts by name</label>
      <input
        className={styles.input}
        placeholder="Enter name"
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
