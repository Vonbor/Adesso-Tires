import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";


var userIsRegistered = true;

function App(){
  return (
      <div className="contianer">
        <Navbar />
        <Form isRegistered= {userIsRegistered} />
      </div>
      );
}





export default App;