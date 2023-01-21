import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.formLabel}>
    Find contacts by name{' '}
    <input
      className={css.formInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
