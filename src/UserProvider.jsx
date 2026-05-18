import { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function editTodo(id, updatedTodo) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)),
    );
  }
  return (
    <UserContext.Provider value={{ todos, setTodos, deleteTodo, editTodo }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
