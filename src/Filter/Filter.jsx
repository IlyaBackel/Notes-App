import React from "react";

import "./Filter.css";
import { EASY, HARD, MEDIUM } from "../const";

export default class Filter extends React.Component {
  handleChecked = (e) => {
    this.props.onChecked(e.target.value, e.target.checked)
  }

  render() {
    const { filters } = this.props;
    return (
      <div className="filter">
        <h2>Importance</h2>
        <div className="filter-inputs">
          <input
            className="filter-btn"
            type="checkbox"
            value={EASY}
            checked={filters[EASY]}
            onChange={this.handleChecked}
          />
          {EASY}
          <input
            className="filter-btn"
            type="checkbox"
            value={MEDIUM}
            checked={filters[MEDIUM]}
            onChange={this.handleChecked}
          />
          {MEDIUM}
          <input
            className="filter-btn"
            type="checkbox"
            value={HARD}
            checked={filters[HARD]}
            onChange={this.handleChecked}
          />
          {HARD}
        </div>
      </div>
    );
  }
}
