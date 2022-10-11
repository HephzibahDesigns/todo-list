import React, { useState, useRef, useEffect, Fragment } from "react";

function TodoForm(props) {
  const [name, setName] = useState(props.edit ? props.edit.value : "");

  // To auto focus to your input
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  //

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //provides id and name to every todo created
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: name,
    });

    setName("");
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    //provides id and name to every todo created
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: name,
    });

    setName("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <Fragment>
          <input
            type="text"
            ref={inputRef}
            placeholder="Update your item"
            value={name}
            onChange={handleChange}
            className="todo-input edit"
          />
          <button onClick={handleSubmit2} className="todo-button edit">
            Update
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <input
            type="text"
            placeholder="Add a todo"
            value={name}
            onChange={handleChange}
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit2} className="todo-button">
            Add todo
          </button>
        </Fragment>
      )}
    </form>
  );
}

export default TodoForm;
