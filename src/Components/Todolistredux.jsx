import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { addToDo } from "../reducer.js/todoReducers";
import { Reduxtodolistdata } from "./Reduxtodolistdata";
const Todolistreddux = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const todo_add = useSelector((state) => state.todo_add);

  const addTodoValue = () => {
    dispatch(
      addToDo({
        name: inputData,
      })
    );
    setInputData("");
  };
  return (
    <div className="reduxlist-border">
      <div className=" todo-item-style">
        <input
          className="input-txt"
          type="text"
          placeholder="Write your task here"
          name="todo"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          id="add-btn"
          onClick={addTodoValue}
          disabled={inputData.match(/^\s*$/)}
        >
          <BsPlusLg />
        </button>
      </div>
      <Reduxtodolistdata />;
    </div>
  );
};

export default Todolistreddux;
