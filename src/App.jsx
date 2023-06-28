import { useState } from "react";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [lastChanged, setLastChanged] = useState(0);

  const getRadomSwitchExeptOne = (lastSwitch) => {
    let number = Math.floor(Math.random() * 3 + 1);

    while (number === lastSwitch) {
      number = Math.floor(Math.random() * 3 + 1);
    }
    return number;
  };

  const checkAndAdapt = () => {
    if (switch1 && switch2 && switch3) {
      const switchToChange = getRadomSwitchExeptOne(lastChanged);

      switch (switchToChange) {
        case 1:
          setSwitch1(false);
          break;
        case 2:
          setSwitch2(false);
          break;
        case 3:
          setSwitch3(false);
          break;
        default:
          break;
      }

      // switch (value) {
      //   case "switch1":
      //     if (switchToChange === 1) setSwitch2(!switch2);
      //     else setSwitch3(!switch3);

      //     break;
      //   case "switch2":
      //     if (switchToChange === 1) setSwitch1(!switch1);
      //     else setSwitch3(!switch3);
      //     break;
      //   case "switch3":
      //     if (switchToChange === 1) setSwitch2(!switch1);
      //     else setSwitch3(!switch2);
      //     break;
      //   default:
      //     break;
      // }
    }
  };

  checkAndAdapt();

  return (
    <>
      {/* <div>
        <label className="switch red">
          <input
            type="checkbox"
            checked={switch1}
            onChange={() => {
              setSwitch1(!switch1);
              setLastChanged(1);
            }}
          />
          <span className="slider round"></span>
        </label>
        FAST
      </div>

      <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={switch2}
            onChange={() => {
              setSwitch2(!switch2);
              setLastChanged(2);
            }}
          />
          <span className="slider round"></span>
        </label>
        GOOD
      </div>
      <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={switch3}
            onChange={() => {
              setSwitch3(!switch3);
              setLastChanged(3);
            }}
          />
          <span className="slider round"></span>
        </label>
        CHEAP
      </div> */}
      <div className="container">
        <input
          type="checkbox"
          id="fast"
          checked={switch1}
          onChange={() => {
            setSwitch1(!switch1);
            setLastChanged(1);
          }}
        />
        <label className="red" htmlFor="fast">
          FAST
        </label>

        <input
          type="checkbox"
          id="good"
          checked={switch2}
          onChange={() => {
            setSwitch2(!switch2);
            setLastChanged(2);
          }}
        />
        <label className="green" htmlFor="good">
          GOOD
        </label>

        <input
          type="checkbox"
          id="cheap"
          checked={switch3}
          onChange={() => {
            setSwitch3(!switch3);
            setLastChanged(3);
          }}
        />
        <label className="blue" htmlFor="cheap">
          CHEAP
        </label>
      </div>
    </>
  );
}

export default App;
