import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [name, setName] = useState("");

  // To auto focus to your input
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  //

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random * 10000),
    //   text: name
    // })

    setName("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="add todo"
        value={name}
        onChange={handleChange}
        className="todo-input"
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
