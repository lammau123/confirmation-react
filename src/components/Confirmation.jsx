import React, { useState } from "react";
import Notification from "./Notification";

const Confirmation = ({message, type, accept, decline}) => {
  const [confirm, setConfirm] = useState(false);
  const handleClick = (a) => {
    setConfirm(!confirm);
    if(a){
      accept();
    } else {
      decline();
    }
  }
  if(!confirm){
    return (
      <Notification message={message} type={type}>
        <div>
          <button className="btn btn-primary" style={{backgroundColor: 'green'}} onClick={() => handleClick(true)}>Yes</button>
        </div>
        <div>
          <button className="btn btn-danger" onClick={() => handleClick(false)}>No</button>
        </div>
      </Notification>
    );
  } else {
    return null;
  }
};

export default Confirmation;
