import React, { useState } from "react";
import "./unitDwoSmv.css";
import Zn from "../zn/Zn";
import Vv from "../vv/Vv";
import CellText from "../cellText/CellText";
import Zus from "../zus/Zus";
import ToggleMove from "../toggleMove/ToggleMove";
import Rr44 from "../rr44/Rr44";

// {location, isActive, handleToggle}

const UnitDwoSmv = ({
  number,
  name,
  inf1 = "",
  inf2 = "",
  devicesStatus,
  handleToggleDevice,
}) => {
  const { r1, r2, zn1, zn2, vv, dwo } = devicesStatus;

  return (
    <div className="unit-dwo-smv">
      <div className="unit-dwo-smv__start">
        <div>{number}</div>
      </div>
      <div className="unit-dwo-smv__horiz-line0"></div>
      <div className="unit-dwo-smv__horiz-line1">
        <div className="unit-dwo-smv__vertical-line1">
          <div className="unit-dwo-smv__horiz-line10"></div>
          <div className="unit-dwo-smv__horiz-line11"></div>
          <div className="unit-dwo-smv__vertical-line1-vv">
            <ToggleMove
              cellNumber={number}
              isActive={vv}
              isMove={dwo}
              handleToggleDevice={handleToggleDevice}
            ></ToggleMove>
          </div>
          <div className="unit-dwo-smv__vertical-line-zn-2">
          <div className="unit-dwo-smv__horizontal-line-zn2"></div>
          <div className="unit-dwo-smv__vertical-line2">
            <div className="unit-dwo-smv__vertical-line2-zn2">
              <Rr44 cellNumber={number} location={"zn2"} isActive={zn2} handleToggle={handleToggleDevice}></Rr44>
            </div>
            <div className="unit-dwo-smv__zus">
              <Zus></Zus>
            </div>
          </div>
        </div>
          <div className="unit-dwo-smv__vertical-line1-adapt1"></div>
        </div>
        <div className="unit-dwo-smv__vertical-line3"></div>
      </div>

      <div className="unit-dwo-smv__horiz-line-end"></div>
      <div className="unit-dwo-smv__end">
        <CellText>{name}</CellText>
        <CellText>{inf1}</CellText>
        <CellText>{inf2}</CellText>
      </div>
    </div>
  );
};

export default UnitDwoSmv;
