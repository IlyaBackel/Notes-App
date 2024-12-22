import React from "react";
import Todo from "../Todo/Todo";
import "./TodosList.css"

export default class TodoList extends React.PureComponent {
  render() {
    const { todos, onDelete, onChecked, sortTodos, onEditName, onEditDes } = this.props;

    return (
      <ul className="todo-list">
        {sortTodos(todos).map((todo) => (
          <Todo 
            key={todo.id}
            id={todo.id}
            name={todo.name}
            done={todo.done}
            description={todo.description}
            importance={todo.importance}
            onDelete={onDelete}
            onChecked={onChecked}
            onEditName={onEditName}
            onEditDes={onEditDes}
          />
        ))}
      </ul>
    );
  }
}