import React from "react";
import "./Inputs.css";
import { EASY, HARD, MEDIUM } from "../const";

export default class Inputs extends React.PureComponent {
  render() {
    const {
      name,
      description,
      setName,
      setDescription,
      addTodo,
      setImportance,
      importance
    } = this.props;

    return (
      <div className="create-todo">
        <form
          className="inputs"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            className="input-name"
            value={name}
            onChange={setName}
            placeholder="Enter name"
          />
          <input
            className="input-description"
            value={description}
            onChange={setDescription}
            placeholder="Enter description"
          />

          <label>
            <input
              type="radio"
              name="importance"
              value="Easy"
              checked={importance === EASY}
              onChange={setImportance}
            />
            Easy
          </label>
          <label>
            <input
              type="radio"
              name="importance"
              value="Medium"
              checked={importance === MEDIUM}
              onChange={setImportance}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="importance"
              value="Hard"
              checked={importance === HARD}
              onChange={setImportance}
            />
            Hard
          </label>
          <button className="btn-create" type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}
