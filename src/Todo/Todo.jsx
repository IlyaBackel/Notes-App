import React from "react";
import "./Todo.css";

export default class Todo extends React.PureComponent {
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  handleCheck = (e) => {
    this.props.onChecked(e.target.checked, this.props.id);
  };

  handleEditName = (e) => {
    this.props.onEditName(e.target.value, this.props.id);
  };

  handleEditDes = (e) => {
    this.props.onEditDes(e.target.value, this.props.id);
  };

  render() {
    const { id, name, description, done, importance } = this.props;
    const importanceClass = importance.toLowerCase(); 

    return (
      <li className={`todo ${importanceClass}`}>
        <input
          type="checkbox"
          checked={done}
          onChange={this.handleCheck}
        />
        <form className="data-todo" onSubmit={this.handleSubmit}>
          <input
            value={name}
            className="todo-name"
            onChange={this.handleEditName}
          />
          <input
            value={description}
            className="todo-description"
            onChange={this.handleEditDes}
          />
        </form>
        <p>{importance}</p>
        <p>{new Date(id).toLocaleString()}</p>
        <button className="delete" onClick={this.handleDelete}>
          <img
            className="todo-img"
            src="../../img/icons8-trash.svg"
            alt="Delete"
          />
        </button>
      </li>
    );
  }
}