import React from "react";
import { Header, Footer, TodoItem, TodoList } from "../Components";

function Functionbased() {
  return (
    <>
      <Header />
      <Footer />

      <h3 className="para-function">This is Function based Component</h3>
      <div className="Functiontodowrapper">
        {" "}
        <TodoItem />
      </div>
    </>
  );
}

export default Functionbased;
