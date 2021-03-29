import React from "react";
import Form from "./Form";


var userIsRegistered = true;

function App(){
  return (
      <div className="contianer">
        {/* Navbar Component*/}
          <Form isRegistered= {userIsRegistered} />
      </div>
      );
}





export default App;