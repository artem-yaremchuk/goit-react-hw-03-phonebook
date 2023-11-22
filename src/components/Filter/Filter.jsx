import css from "./Filter.module.css";
import { Component } from "react";

class Filter extends Component {
  handleChange = (evt) => {
    this.props.filterContact(evt.target.value);
  };

  render() {
    return (
      <div className={css.filterForm}>
        <label htmlFor="inputFilter" className={css.filterLabel}>
          Find contacts by name:
          <input
            type="text"
            className={css.filterInput}
            id="inputFilter"
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </label>
      </div>
    );
  }
}

export default Filter;
