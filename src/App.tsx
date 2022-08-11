import React, {useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Todolist from "./components/Todolist";
import { Todo } from "./model";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos,{ id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todo);

  return (
    <div className="App">
      <span className="heading">ProTask</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Todolist todos={todos} setTodos={setTodos}/>
      {/* {todos.map((t) => (
        <li key={t.id}>{t.todo}</li>
      ))} */}
    </div>
  );
};

export default App;
