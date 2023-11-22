import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map((el) => (
        <ContactListItem
          key={el.id}
          contact={el}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
