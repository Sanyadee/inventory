import { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("");
  const [fulfillment, setFulfillment] = useState("");
  const { setTodos } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      name,
      description,
      category,
      date,
      time,
      priority,
      fulfillment,
    };
    setTodos((prev) => [...prev, newTodo]);
    navigate("/");
  }
  return (
    <div className="bg-blue-700">
      <div className="bg-[#FFFFFF80] rounded-2xl w-screen py-16 px-8 h-screen lg:overflow-x-hidden overflow-y-hidden">
        <h1 className="text-center text-4xl text-white font-bold">
          React To-Do List
        </h1>
        <form
          action=""
          className="w-full h-full bg-white rounded-[20px] py-4 px-2"
          onSubmit={handleSubmit}
        >
          <label className="block mb-8 text-3xl" htmlFor="add a new to-do ">
            Add a new to-do :
          </label>
          <div className="w-full h-full flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                required
                type="text"
                name="name"
                id=""
                placeholder="name for the task you're going to do"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <input
                required
                type="address"
                placeholder="a short description of the tas- can be omitted"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <input
                required
                type="text"
                name="category"
                id=""
                placeholder="e.g household, school,work"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                required
                type="text"
                placeholder="dd/mm/yyy -can be omitted"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="time">Time:</label>
              <input
                required
                type="text"
                placeholder="hh:mm -can be omitted"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="priority">Priority:</label>
              <select
                required
                value={priority}
                name="dropdown"
                id=""
                className="border border-black"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="">select from dropdown</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">low</option>
              </select>
            </div>
            <div>
              <label htmlFor="fulfillment">Fulfillment:</label>
              <input
                required
                type="range"
                value={fulfillment}
                onChange={(e) => setFulfillment(Number(e.target.value))}
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-8 py-2 rounded-2xl bg-[#517FF6] mr-20 text-white"
              >
                Save
              </button>
              <button
                type="reset"
                className="px-8 py-2 rounded-2xl bg-white border-black border-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
