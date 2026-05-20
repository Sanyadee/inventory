import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@iconify-react/material-symbols/delete";
import "./App.css";
const DetailsPage = () => {
  const { todos, deleteTodo } = useContext(UserContext);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const filteredTodos =
    filter === "completed"
      ? todos.filter((todo) => Number(todo.fulfillment) === 100)
      : todos;
  return (
    <div className="bg-blue-700 h-full">
      <div className="bg-[#FFFFFF80] rounded-2xl w-full py-16 px-8 h-full">
        <h1 className="text-center text-4xl text-white font-bold">
          React To-Do List
        </h1>
        <div className="w-full h-full bg-[#FFFFFFBF] rounded-[20px] py-4 px-2 ">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <button
              className=" bg-[#FFFFFFBF] px-8 py-0.5 rounded-[10px] lg:px-30 hover:bg-[#517FF6] hover:text-white"
              onClick={() => navigate("/form")}
            >
              Add a new to do
            </button>
            <button
              className=" bg-[#FFFFFFBF] px-5 py-0.5 rounded-[10px] hover:bg-[#517FF6] hover:text-white"
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button className=" bg-[#FFFFFFBF] px-5 py-0.5 rounded-[10px] hover:bg-[#517FF6] hover:text-white">
              To-do
            </button>
            <button
              className=" bg-[#FFFFFFBF] px-5 py-0.5 rounded-[10px] hover:bg-[#517FF6] hover:text-white"
              onClick={() => setFilter("completed")}
            >
              completed
            </button>
          </div>

          {todos.length === 0 ? (
            <h1>no to-do's</h1>
          ) : (
            filteredTodos.map((todo) => (
              <div key={todo.id}>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7 items-center text-center sm:bg-white p-4 rounded-xl shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl mb-2.5 mt-2.5">
                  <div className="block text-center">
                    <h1>task</h1>
                    <p>{todo.name}</p>
                  </div>
                  <div className="block text-center">
                    <h1>description</h1>
                    <p>{todo.description}</p>
                  </div>
                  <div className="block text-center">
                    <h1>category</h1>
                    <p>{todo.category}</p>
                  </div>
                  <div block>
                    <h1>when</h1>
                    <p>{todo.date}</p>
                    <p>{todo.time}</p>
                  </div>
                  <div className="block text-center">
                    <h1>priority</h1>
                    <p>{todo.priority}</p>
                  </div>
                  <div className="block text-center">
                    <h1>fulfillment</h1>
                    <p>{todo.fulfillment}</p>
                  </div>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon height="1em" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
