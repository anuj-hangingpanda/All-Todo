// import moment from "moment";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo } from "../reducer.js/todoReducers";
// import { BsFillArchiveFill } from "react-icons/bs";
// import { BsFillPencilFill } from "react-icons/bs";
// import { BsFillPenFill } from "react-icons/bs";
// import { BsXCircleFill } from "react-icons/bs";
// import { BsPlusLg } from "react-icons/bs";
// import { deleteToDo } from "../reducer.js/todoReducers";
const id = 8;
export const Reduxtodolistdata = () => {
  const dispatch = useDispatch();
  const todo_add = useSelector((state) => state.todo_add);
  const handledeletetodo = (id) => {
    console.log(id, "id");
    dispatch(deleteToDo({ id: id }));
  };
  return (
    <div>
      {todo_add?.map((task, index) => (
        <>
          <div className="redux-list-wrapper">
            <div className="reduxlist">
              <ul className="ul-style" key={index}>
                <li className="redux-liststyle">{task.data}</li>
              </ul>
            </div>
            <div className="reduxdelbtn">
              <button className="rbtn-del" onClick={() => handledeletetodo(task.id)}>delete</button> 
            </div>
          </div>
        </>
      ))}
    </div>
  );
  // <div className="Todolist-style">
  //   {props.todoslist?.length > 0 ? (
  //     <ul className="todo-list">
  //       {props.todoslist.map((text, index) => {
  //         return (
  //           <div className="todo">
  //             <div>
  //               <input
  //                 type="checkbox"
  //                 className="custom-checkbox"
  //                 onClick={() => Checkbox(index)}
  //               />
  //             </div>
  //             <div className="txt">
  //               {text?.isedit === true ? (
  //                 <div className="edit-item">
  //                   <input
  //                     value={currentTodo}
  //                     type="text"
  //                     className="-inputedit"
  //                     placeholder="Edit the task"
  //                     onChange={(e) => handleinputupdate(e)}
  //                   />

  //                   <div className="update-btn">
  //                     <button
  //                       className="update"
  //                       onClick={() => updatetodo(text.id)}
  //                     >
  //                       <BsFillPenFill />
  //                     </button>
  //                   </div>
  //                   <div className="del-btn ">
  //                     <button
  //                       className="back design"
  //                       onClick={() => Backlist(index)}
  //                     >
  //                       <BsXCircleFill />
  //                     </button>
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <li
  //                   className={
  //                     text?.isChecked === true ? "completed" : "listitem"
  //                   }
  //                   key={index}
  //                 >
  //                   {text?.test}
  //                   {console.log(text, typeof text?.id, "internalllll")}{" "}
  //                   <span className="time-data">
  //                     {moment(text?.id).format("LTS")}
  //                   </span>
  //                 </li>
  //               )}
  //             </div>

  //             <div className={text?.isedit === true ? "display" : "btnd"}>
  //               <button
  //                 className="edit-bt"
  //                 onClick={(e) => {
  //                   EditTodo(index, text);
  //                   setcurrentTodo(text.test);
  //                 }}
  //                 hidden={text?.isedit || text?.isChecked}
  //               >
  //                 <BsFillPencilFill />
  //               </button>
  //               <button
  //                 className="del-btn"
  //                 id="del-btn"
  //                 hidden={text?.isedit}
  //                 onClick={() => deletTodo(text.id)}
  //               >
  //                 <BsFillArchiveFill />
  //               </button>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </ul>
  //   ) : (
  //     <div className="empty">
  //       <p>Task list is Empty</p>
  //     </div>
  //   )}
  // </div>
};
