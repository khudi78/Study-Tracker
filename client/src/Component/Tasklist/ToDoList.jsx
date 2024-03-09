import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "./TodoSlice";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function TodoList({ id, text }) {
  const { user } = useContext(UserContext);
    console.log("user", user);
    const timertask = user?.timerTask;
    console.log("task", timertask);
  const [isChecked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const checkHandler = (id) => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div
        key={id}
        className={`text-white text-xl flex space-x-6 ${
          isChecked ? "bg-red-500" : "bg-blue-700"
        }  m-4 w-96 justify-between rounded-xl`}
      >
        <input
          type="checkbox"
          className="ml-4"
          onChange={() => checkHandler(id)}
        />
        <p className={`text-black ${isChecked ? "line-through" : ""} text-xl font-bold`}>
          {text}
        </p>

        <button onClick={() => dispatch(removeTodo(id))}>
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}

export default TodoList;
