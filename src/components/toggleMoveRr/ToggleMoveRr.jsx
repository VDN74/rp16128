import React from "react";
import "./toggleMoveRr.css";

// const [isActive, setIsActive] = useState(false)
// const [isMove, setIsMove] = useState(false)

const toggleMoveRr = ({ cellNumber, isActive, isMove, handleToggleDevice }) => {

  return (
    <div className="toggle-move-rr">
      <div className={`toggle-move-rr__wrapper ${!isMove ? "move" : ""}`} onClick={() => handleToggleDevice({ cellNumber, location: "dwo", status: !isMove })}>
        <div className="toggle-move-rr__line-1">
            <div className="toggle-move-rr__rr">
              <div className="toggle-move-rr__rr-line"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default toggleMoveRr;