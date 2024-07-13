import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');

  const onSeclectChange = e => {
    setRegion(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(region);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
        onChange={onSeclectChange}
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(({ id, value, name }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
};
