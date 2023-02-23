import React from "react";
import {
  Footer,
  Header,
  Reduxtodolistdata,
  Todolistreddux,
} from "../Components";

function WithRedux() {
  return (
    <>
      <Header />
      <Footer />
      <Todolistreddux />
      {/* <Reduxtodolistdata /> */}
    </>
  );
}

export default WithRedux;
