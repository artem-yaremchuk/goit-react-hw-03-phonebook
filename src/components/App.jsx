import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (newContact) => {
    const contactObj = {
      ...newContact,
      id: nanoid(),
    };
    this.setState((prev) => ({
      contacts: [...prev.contacts, contactObj],
    }));
  };

  filterContact = (filterValue) => {
    this.setState((prevState) => ({
      ...prevState,
      filter: filterValue,
    }));
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }));
  };

  componentDidMount() {
    const localData = localStorage.getItem("contacts");
    if (localData) this.setState({ contacts: JSON.parse(localData) });
    else
      this.setState({
        contacts: [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ],
      });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts) {
      prevState.contacts.length !== this.state.contacts.length &&
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div>
        <h1
          style={{
            fontWeight: 500,
            lineHeight: "1.5",
            textAlign: "center",
            letterSpacing: "0.02em",
            color: "#2E2F42",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          Phonebook
        </h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />

        <h2
          style={{
            fontWeight: 500,
            lineHeight: "1.5",
            textAlign: "center",
            letterSpacing: "0.02em",
            color: "#2E2F42",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          Contacts
        </h2>
        <Filter filterContact={this.filterContact} />
        {this.state.contacts.length > 0 && (<ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />)}
      </div>
    );
  }
}

export default App;
