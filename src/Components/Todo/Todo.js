import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodods] = useState([]);
  //use effect
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodods(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodods(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodods(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };
  return (
    <div>
      <h1>Thanh's todo {inputText}</h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
};
export default Todo;
