import React from "react";

function Form({ addTodo }) {
  let [title, setTitle] = React.useState("");
  let [desc, setDesc] = React.useState("");
  return (
    // To get todo from the user 
    <div className="form">
      <input
        type="text"
        name="todo-title"
        id="todo-title"
        className="todo-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        name="todo-desc"
        id="todo-desc"
        className="todo-desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="description"
      />
      <button
        onClick={() => {
          addTodo(title, desc);
          setTitle("");
          setDesc("");
        }}
      >
        Add
      </button>
    </div>
  );
}
export default Form;
