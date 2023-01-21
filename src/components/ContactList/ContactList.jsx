import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeliteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactItem}>
        <p>
          {name}: {number}
        </p>
        <button
          className={css.buttonDelete}
          onClick={() => onDeliteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
