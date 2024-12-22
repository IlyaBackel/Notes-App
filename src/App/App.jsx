import React from "react";

import Inputs from "../Inputs/Inputs";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import TodoList from "../TodosList/TodosList";

import "./App.css";
import { EASY, HARD, MEDIUM } from "../const";

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      search: "",
      todos: [],
      importance: EASY,
      done: false,
      filters: {
        [EASY]: false,
        [MEDIUM]: false,
        [HARD]: false,
      },
    };
  }

  filters = [
    (todo) => {
      const { filters } = this.state;
      return filters[todo.importance]
        ? true
        : Object.values(filters).every((value) => value === false);
    },
    (todo) => {
      const { done } = this.state;
      return done ? !todo.done : true;
    },
    (todo) => {
      const { search } = this.state;
      return todo.name.toLowerCase().includes(search.toLowerCase()) ||
        todo.description.toLowerCase().includes(search.toLowerCase())
    },
  ];

  render() {
    const { filters, todos } = this.state;

    const filteredTodos = todos.filter((todo) => {
      return this.filters.every((func) => func(todo));
    });

    return (
      <div className="container">
        <div className="filter-container">
          <Search search={this.state.search} setSearch={this.handleSetSearch} />
          <Filter filters={filters} onChecked={this.handleCheckedFilters} />
        </div>
        <div className="main-container">
          <Inputs className="inputs"
            name={this.state.name}
            description={this.state.description}
            importance={this.state.importance}
            setName={this.handleSetName}
            setDescription={this.handleSetDescription}
            addTodo={this.handleAddTodo}
            setImportance={this.handleSetImportance}
          />
          <input className="completed"
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleSetDone}
          />
          Hide completed
          <TodoList className="todos"
            todos={filteredTodos}
            onDelete={this.handleDelete}
            onChecked={this.handleCheckedDone}
            sortTodos={this.handleSortTodo}
            onEditName={this.handleEditName}
            onEditDes={this.handleEditDes}
          />
        </div>
      </div>
    );
  }

  handleSetName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSetDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  handleSetDone = (e) => {
    this.setState({ done: e.target.checked });
  };

  handleSetImportance = (e) => {
    this.setState({ importance: e.target.value });
  };

  handleSetSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleAddTodo = () => {
    if (this.state.name.trim() === "") return;
    const todo = {
      name: this.state.name,
      description: this.state.description,
      id: Date.now(),
      done: false,
      importance: this.state.importance,
    };
    this.setState({
      name: "",
      description: "",
      todos: [todo].concat(this.state.todos),
      importance: EASY,
    });
  };

  handleCheckedDone = (done, id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, done } : todo
      ),
    });
  };

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  handleSortTodo = (todos) => {
    const uncompleted = todos
      .filter((todo) => !todo.done)
      .sort((a, b) => a.id - b.id);
    const completed = todos.filter((todo) => todo.done);
    return [...uncompleted, ...completed];
  };

  handleEditName = (value, id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, name: value } : todo
      ),
    });
  };

  handleEditDes = (value, id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, description: value } : todo
      ),
    });
  };

  handleCheckedFilters = (value, checked) => {
    this.setState({
      filters: {
        ...this.state.filters,
        [value]: checked,
      },
    });
  };
}
