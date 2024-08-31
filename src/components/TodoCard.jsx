import React from "react";

export default function TodoCard(props) {
  const { children, handleEdit, handleDeleteTodos, index } = props;
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <button
          onClick={() => {
            handleEdit(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodos(index);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
