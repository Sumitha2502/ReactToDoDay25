import "./App.css";
import React from "react";
import Form from "./form.jsx";
import Filter from "./filter.jsx";
import Todo from "./todo.jsx";

function App() {
  let [todos, setTodos] = React.useState([]);
  let [view, setView] = React.useState("all");
  let [filteredTodos, setFilteredTodos] = React.useState([]);

  function addTodo(title, desc) {
    console.log("added");
    let newTodo = {
      id: todos.length + 1,
      title: title,
      description: desc,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function editTodo(id, newTitle, newDesc) {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        title: todo.id === id ? newTitle : todo.title,
        description: todo.id === id ? newDesc : todo.description,
      }))
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleCompleteTodo(id) {
    console.log("toggled");
    setTodos(
      todos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      }))
    );
  }

  function changeView(e) {
    setView(e.target.value);
  }

  React.useEffect(() => {
    if (view === "all") {
      setFilteredTodos(todos);
    }
    if (view === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
    }
    if (view === "not completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
    }
  }, [view, todos]);

  return (
    <div className="container">
      <h1>My Todo</h1>
      <Form addTodo={addTodo} />
      <hr />

      <h3>My Todos</h3>
      <Filter view={view} changeView={changeView} />
      <div className="products">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              {...todo}
              key={todo.id}
              toggleCompleteTodo={toggleCompleteTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
