import React from "react";
import "./toggleMoveTn.css";

// const [isActive, setIsActive] = useState(false)
// const [isMove, setIsMove] = useState(false)

const toggleMoveTn = ({ cellNumber, isActive, isMove, handleToggleDevice }) => {

  return (
    <div className="toggle-move-tn">
      <div className={`toggle-move-tn__wrapper ${!isMove ? "move" : ""}`} onClick={() => handleToggleDevice({ cellNumber, location: "dwo", status: !isMove })}>
        <div className="toggle-move-tn__line-1">
          <div className="toggle-move-tn__circle1"></div>
          <div className="toggle-move-tn__circle2"></div>
          <div className="toggle-move-tn__circle3"></div>
        </div>
        
      </div>
    </div>
  );
};

export default toggleMoveTn;