import React, { useState } from "react";
import "./unitDwoRr.css";
import Zn from "../zn/Zn";
import Vv from "../vv/Vv";
import CellText from "../cellText/CellText";
import Zus from "../zus/Zus";
import ToggleMoveRr from "../toggleMoveRr/ToggleMoveRr";

// {location, isActive, handleToggle}

const UnitDwoRr = ({ number, name, inf1="", inf2="", devicesStatus, handleToggleDevice }) => {
  const {r1, r2, zn1, zn2, vv, dwo} = devicesStatus;

  return (
    <div className="unit-dwo-rr">
      <div className="unit-dwo-rr__start">
        <div>{number}</div>
      </div>
      <div className="unit-dwo-rr__horiz-line0"></div>
      <div className="unit-dwo-rr__horiz-line1">
        <div className="unit-dwo-rr__vertical-line1">
        <div className="unit-dwo-rr__horiz-line10"></div>
        <div className="unit-dwo-rr__horiz-line11"></div>
        <div className="unit-dwo-rr__vertical-line1-vv">
          <ToggleMoveRr cellNumber={number} isActive={vv} isMove={dwo} handleToggleDevice={handleToggleDevice}></ToggleMoveRr>
        </div>
        
        <div className="unit-dwo-rr__horiz-line2"></div>
      </div>
      </div>
      
      <div className="unit-dwo-rr__horiz-line-end"></div>
      <div className="unit-dwo-rr__end">
        <CellText>{name}</CellText>
        <CellText>{inf1}</CellText>
        <CellText>{inf2}</CellText>
      </div>
    </div>
  );
};

export default UnitDwoRr;