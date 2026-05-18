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
    <div className="bg-[#c6e1fd] rounded-2xl w-screen py-16 px-8 h-screen">
      <h1 className="text-center text-4xl text-white font-bold">
        React To-Do List
      </h1>
      <div className="w-full h-full bg-white rounded-[20px] py-4 px-2 ">
        <div className="flex justify-between">
          <button
            className=" bg-[#f0fbfd] px-8 py-0.5 rounded-[10px] lg:px-30  "
            onClick={() => navigate("/form")}
          >
            Add a new to do
          </button>
          <button
            className=" bg-[#f0fbfd] px-5 py-0.5 rounded-[10px]"
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button className=" bg-[#f0fbfd] px-5 py-0.5 rounded-[10px]">
            To-do
          </button>
          <button
            className=" bg-[#f0fbfd] px-5 py-0.5 rounded-[10px]"
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
              <div className="flex justify-between">
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
  );
};

export default DetailsPage;
