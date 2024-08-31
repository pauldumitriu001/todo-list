import React, { useEffect } from "react";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    if (!localStorage) {
      //local storage exist? If not then return
      return;
    }

    //local storage does exist

    //grab from local storage
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return; //if no exist return

    localTodos = JSON.parse(localTodos).todos; //if it exsts then we need to parse it from JSON, we need to parse the json then take the todos variable
    setTodos(localTodos); //load the todos from local storage on startup
  }, []); //empty because we want this to only run when a page is loaded (or reloaded)

  //function to persist data from local storage to the browser
  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList })); //sets an item to the key todos so that we can pull it in the useffect
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEdit(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }

  return (
    <main>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        handleEdit={handleEdit}
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
      />
    </main>
  );
}

export default App;
