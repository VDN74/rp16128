import { useState } from "react";

import "./app.css";

import UnitDwo from "./components/unitDwo/UnitDwo";
import UnitDwoV1 from "./components/unitDwoV1/UnitDwoV1";
import Button from "./components/button/Button";
import Modal from 'react-modal';
import UnitDwoTn from "./components/unitDwoTn/UnitDwoTn";
import UnitDwoRr from "./components/unitDwoRr/UnitDwoRr";
import UnitDwoSmv from "./components/unitDwoSmv/UnitDwoSmv";
import dataDefaultStateForCells from "./dataDefaultStateForCells.json"
import dataDefaultStateForCells00 from "./dataDefaultStateForCells00.json"



const App = () => {
  const [typeSchema, setTypeSchema] = useState("normal") // normal | off
  const [statusDevicesCells, setStatusDevicesCells] = useState(() => typeSchema === "normal" ? dataDefaultStateForCells : dataDefaultStateForCells00);
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleToggleDevice = ({ cellNumber, location, status }) => {
    if (statusDevicesCells[cellNumber][location] === null) {
      return;
    }

    console.log(cellNumber, location, status);

    setStatusDevicesCells({
      ...statusDevicesCells,
      [cellNumber]: {
        ...statusDevicesCells[cellNumber],
        [location]: status,
      },
    });
  };

  const customStylesForModal = {
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "560px",
    height: "140px",
  },
};

  return (
    <>
    <Modal
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        style={customStylesForModal}
        appElement={document.getElementById("root")}
      >
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <Button handler={() => setIsOpenModal(false)} use={""}>X</Button>
      </div>
      <div>
        Электрическая схема с интерактивными элементами для ПК и мобильных
        устройств. Полезна для инструктажей, наглядной демонстрации и анализа
        порядка переключений.
      </div>
      </Modal>
      <div className="app__buttons">
    <Button handler={() => setIsOpenModal(true)} use={"primary"}>О схеме?</Button>
    <Button handler={() => {setStatusDevicesCells(dataDefaultStateForCells00); setTypeSchema("off")}} use={typeSchema === "off" ?  "success" : "primary"}>Схема РП</Button>
    <Button handler={() => {setStatusDevicesCells(dataDefaultStateForCells); setTypeSchema("normal")}} use={typeSchema === "normal" ?  "success" : "primary"}>"Нормальная схема" РП</Button>
    </div>
      <h1 className="app__title1">РП - 16128 (РУ - 10 кВ)</h1>
      <div className="app__title2">1 секция</div>
      <div className="app__sec1">
        <UnitDwo
          key={1}
          number={1}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[1]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={3}
          number={3}
          name={"КТП-20"}
          inf1={"Т-1"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[3]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={5}
          number={5}
          name={"РП-6"}
          inf1={"яч.10"}
          inf2={""}
          devicesStatus={statusDevicesCells[5]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={7}
          number={7}
          name={"( Резерв )"}
          inf1={"ТП-7"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[7]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={9}
          number={9}
          name={"ЦРП-1"}
          inf1={"яч.20"}
          inf2={""}
          devicesStatus={statusDevicesCells[9]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={11}
          number={11}
          name={"КТП-19"}
          inf1={"Т-1"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[11]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={13}
          number={13}
          name={"ЦРП-2"}
          inf1={"яч.10"}
          inf2={""}
          devicesStatus={statusDevicesCells[13]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={15}
          number={15}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[15]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwoV1
          key={17}
          number={17}
          name={"Ввод-1 фид."}
          inf1={"16128 -5,6,7,8"}
          inf2={""}
          devicesStatus={statusDevicesCells[17]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwoV1>
        <UnitDwoTn
          key={19}
          number={19}
          name={"ТН-1сш,"}
          inf1={"ЗН-1сш"}
          inf2={""}
          devicesStatus={statusDevicesCells[19]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwoTn>
        <UnitDwoRr
          key={21}
          number={21}
          name={"СР"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[21]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwoRr>
        <UnitDwoSmv
          key={23}
          number={23}
          name={"СМВ,"}
          inf1={"ЗН СР"}
          inf2={""}
          devicesStatus={statusDevicesCells[23]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwoSmv>
      </div>
      <div className="app__title3">2 секция</div>
      <div className="app__sec2">
        <UnitDwo
          key={2}
          number={2}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[2]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={4}
          number={4}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[4]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={6}
          number={6}
          name={"РП-6"}
          inf1={"яч.15"}
          inf2={""}
          devicesStatus={statusDevicesCells[6]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={8}
          number={8}
          name={"ТП - 1, 8"}
          inf1={"1000 кВА,"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[8]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={10}
          number={10}
          name={"ТП-2"}
          inf1={"1600 кВА"}
          inf2={""}
          devicesStatus={statusDevicesCells[10]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={12}
          number={12}
          name={"КТП-19"}
          inf1={"Т-2"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[12]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={14}
          number={14}
          name={"КТП-20"}
          inf1={"Т-2"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[14]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={16}
          number={16}
          name={"ТП-15"}
          inf1={"1000 кВА"}
          inf2={""}
          devicesStatus={statusDevicesCells[16]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwoV1
          key={18}
          number={18}
          name={"Ввод-2 фид."}
          inf1={"16128 -1,2,3,4"}
          inf2={""}
          devicesStatus={statusDevicesCells[18]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwoV1>
        <UnitDwoTn
          key={20}
          number={20}
          name={"ТН-2сш,"}
          inf1={"ЗН-2сш"}
          inf2={""}
          devicesStatus={statusDevicesCells[20]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwoTn>
        <UnitDwo
          key={22}
          number={22}
          name={"ТП-17"}
          inf1={"1000 кВА"}
          inf2={""}
          devicesStatus={statusDevicesCells[22]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
        <UnitDwo
          key={24}
          number={24}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[24]}
          handleToggleDevice={handleToggleDevice}
        ></UnitDwo>
      </div>
    </>
  );
};

export default App;
