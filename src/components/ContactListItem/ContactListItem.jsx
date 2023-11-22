import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li className={css.contactsListItem}>
    <div className={css.contactsWrap}>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
    </div>
      <button
        type='button'
        className={css.deleteBtn}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
