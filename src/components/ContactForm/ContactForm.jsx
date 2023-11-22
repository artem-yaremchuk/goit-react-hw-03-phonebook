import { Component } from "react";
import css from "./ContactForm.module.css";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.name.trim() === "" || this.state.name.trim() === "") {
      alert("Fill in the fields");
      return;
    }
    const sameNames = this.props.contacts.some(
      (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase(),
    );
    if (sameNames) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }
    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <div className={css.formField}>
          <label htmlFor="exampleInputName" className={css.formLabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className={css.formInput}
            id="exampleInputName"
            value={name}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className={css.formField}>
          <label htmlFor="exampleInputNumber" className={css.formLabel}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            className={css.formInput}
            id="exampleInputNumber"
            value={number}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
