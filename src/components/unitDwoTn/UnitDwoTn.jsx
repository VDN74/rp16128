import React, { useState } from "react";
import "./unitDwoTn.css";
import Zn from "../zn/Zn";
import Vv from "../vv/Vv";
import CellText from "../cellText/CellText";
import Zus from "../zus/Zus";
import ToggleMoveTn from "../toggleMoveTn/ToggleMoveTn";
import Rr44 from "../rr44/Rr44";

// {location, isActive, handleToggle}

const UnitDwoTn = ({
  number,
  name,
  inf1 = "",
  inf2 = "",
  devicesStatus,
  handleToggleDevice,
}) => {
  const { r1, r2, zn1, zn2, vv, dwo } = devicesStatus;

  return (
    <div className="unit-dwo-tn">
      <div className="unit-dwo-tn__start">
        <div>{number}</div>
      </div>
      <div className="unit-dwo-tn__horiz-line0"></div>
      <div className="unit-dwo-tn__horiz-line1">
        <div className="unit-dwo-tn__horiz-line1-sguare-x"></div>
      </div>
      <div className="unit-dwo-tn__vertical-line1">
        <div className="unit-dwo-tn__horiz-line11"></div>
        <div className="unit-dwo-tn__vertical-line1-tn">
          <ToggleMoveTn
            cellNumber={number}
            isActive={vv}
            isMove={dwo}
            handleToggleDevice={handleToggleDevice}
          ></ToggleMoveTn>
        </div>

        <div className="unit-dwo-tn__vertical-line-zn-2">
          <div className="unit-dwo-tn__horizontal-line-zn2"></div>
          <div className="unit-dwo-tn__vertical-line2">
            <div className="unit-dwo-tn__vertical-line2-zn2">
              <Rr44
                cellNumber={number}
                location={"zn2"}
                isActive={zn2}
                handleToggle={handleToggleDevice}
              ></Rr44>
            </div>
            <div className="unit-dwo-tn__zus">
              <Zus></Zus>
            </div>
          </div>
        </div>
      </div>
      <div className="unit-dwo-tn__horiz-line-end"></div>
      <div className="unit-dwo-tn__end">
        <CellText>{name}</CellText>
        <CellText>{inf1}</CellText>
        <CellText>{inf2}</CellText>
      </div>
    </div>
  );
};

export default UnitDwoTn;
