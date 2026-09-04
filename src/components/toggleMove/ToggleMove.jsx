import React from "react";
import "./toggleMove.css";
import Vv from "../vv/Vv";

// const [isActive, setIsActive] = useState(false)
// const [isMove, setIsMove] = useState(false)

const ToggleMove = ({ cellNumber, isActive, isMove, handleToggleDevice }) => {

  return (
    <div className="toggle-move">
      <div className={`toggle-move__wrapper ${!isMove ? "move" : ""}`} onClick={() => handleToggleDevice({ cellNumber, location: "dwo", status: !isMove })}>
        <div className="toggle-move__line-1"></div>
        <div className="toggle-move__vv">
          <Vv
            cellNumber={cellNumber}
            location={"vv"}
            isActive={isActive}
            handleToggle={handleToggleDevice}
          ></Vv>
        </div>
        <div className="toggle-move__line-2"></div>
      </div>
    </div>
  );
};

export default ToggleMove;
